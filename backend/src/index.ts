import express, { NextFunction, Request, Response } from "express";
import { userModel } from "./db";
import { hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { z } from "zod";
import { askGemini, recommendBooks } from "./gemini";

const app = express();
const PORT = 3000;
const SALT = 5;
const SECRET = "Thisisconfidentialinformation";

app.use(express.json());

function generateToken(username: string) {
  return sign({ username }, SECRET);
}

function validateSignupInput(req: Request, res: Response, next: NextFunction) {
  const schema = z.object({
    username: z.string(),
    password: z.string().min(8).max(12),
    fname: z.string(),
    lname: z.string(),
  });

  const parsedDataWithSuccess = schema.safeParse(req.body);

  if (parsedDataWithSuccess.success) {
    next();
  } else {
    res.status(401).json({
      message: "Invalid Input!",
      errors: parsedDataWithSuccess.error.errors,
    });
  }
}

function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "You need to sign in first!" });
    return;
  }

  try {
    const decoded = verify(token, SECRET) as { username: string };
    (req as any).username = decoded.username;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token!" });
  }
}

app.post("/signup", validateSignupInput, async (req, res) => {
  const username = req.body.username;
  const password = await hash(req.body.password, SALT);
  const fName = req.body.fname;
  const lName = req.body.lname;

  await userModel.create({ username, password, fname: fName, lname: lName });

  res.json({ message: "You've signed up successfully!" });
});

app.post("/signin", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  const response = await userModel.findOne({ username });

  if (!response) {
    res.status(401).json({ message: "User not found!" });
    return;
  }

  //@ts-ignore
  const passwordMatch = await compare(password, response.password);

  if (passwordMatch) {
    const token = generateToken(username);
    res.json({ token, message: "You've signed in successfully!" });
  } else {
    res.status(401).json({ message: "Invalid Credentials!" });
  }
});

app.get("/all-users", auth, async (req, res) => {
  const users = await userModel.find();
  res.json({ users });
});

app.get("/ask", async (req, res) => {
  const query = req.query.q;
  //@ts-ignore
  const response = await askGemini(query);
  res.send(response);
});

app.get("/books", async (req, res) => {
  const userPreferences = [
    "genre: Crime, Mystery, Suspense",
    "writing-style: fast-paced"
  ]
  const bookRecommendations = await recommendBooks(userPreferences.toString(), 10);
  res.json({
    bookRecommendations,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
