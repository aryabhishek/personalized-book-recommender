// const API_URL = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey";

import axios from "axios";

const API_KEY = "AIzaSyBh3XS0VwpmJZWimCkjzc8ee8I3j7-GojQ";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

async function searchBook(title: string, author: string): Promise<void> {
  try {
    const query = `intitle:${title}+inauthor:${author}`;
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        q: query,
        key: API_KEY,
        maxResults: 1,
      },
    });

    const book = response.data.items;
    if (book) {
      return book;
    } else {
      console.log("No books found.");
    }
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

export { searchBook };
