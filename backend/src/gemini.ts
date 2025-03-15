import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = "AIzaSyASrRW82-GGiKLsMNvSi9hud7G-b6zs2zE";

if (!API_KEY) {
  throw new Error(
    "Missing API key. Please set GEMINI_API_KEY in your .env file."
  );
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function askGemini(question: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  try {
    const result = await model.generateContent(question);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function recommendBooks(userPreferences: string, n: number = 5) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `
  You are a book recommendation system. 
  User Preferences: ${userPreferences}. 

  Please provide ${n} book recommendations.
  Please provide book recommendations in JSON format. 
  Only return a json array.
  Example JSON output: 
  [
    {"title": "Book Title 1", "author": "Author 1", "description": "description of the book"},
    {"title": "Book Title 2", "author": "Author 2", "description": "description of the book"}
  ]
  Recommendations:
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().replace(/\n/g, '');

    if (text) {
      text = text.trim();
      if (text.startsWith("```json")) {
        text = text.substring(7, text.length - 3).trim();
      } else if (text.startsWith("```")) {
        text = text.substring(3, text.length - 3).trim();
      }

      return JSON.parse(text);
    } else {
      console.error("Error: Empty response from Gemini.");
      return [];
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Error: Could not parse response as JSON.", error);
    } else if (error instanceof Error) {
      console.error("An error occurred:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
    return [];
  }
}
