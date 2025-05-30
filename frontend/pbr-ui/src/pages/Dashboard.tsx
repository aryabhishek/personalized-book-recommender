import BookCard from '../components/BookCard';
import { Grid2 } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const BACKEND_URL = "http://localhost:3000"

export default function Dashboard() {
  const [books, setBooks] = useState<Array<Map<string, string>>>([]);

  // const books = [
  //   {
  //     title: 'The Lord of the Rings',
  //     author: 'J.R.R. Tolkien',
  //     imageUrl: "https://www.filmonpaper.com/wp-content/uploads/2011/05/TheLordOfTheRingsFellowshipOfTheRing_quad_UK-2.jpg",
  //     description: "He is the man the myth the legend"
  //   },
  //   {
  //     title: 'Pride and Prejudice',
  //     author: 'Jane Austen',
  //     imageUrl: "https://static.toiimg.com/thumb/msid-103711524,width-1280,height-720,resizemode-4/103711524.jpg"
  //   },
  //   {
  //     title: 'The Lord of the Rings',
  //     author: 'J.R.R. Tolkien',
  //     imageUrl: "https://www.framecaplib.com/lotrlib/images/hauj/hauj0003.jpg",
  //     description: "New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled."
  //   },
  //   {
  //     title: 'Pride and Prejudice',
  //     author: 'Jane Austen',
  //     imageUrl: "https://static.toiimg.com/thumb/msid-103711524,width-1280,height-720,resizemode-4/103711524.jpg"
  //   },
  //   {
  //     title: 'The Lord of the Rings',
  //     author: 'J.R.R. Tolkien',
  //     imageUrl: "https://www.framecaplib.com/lotrlib/images/hauj/hauj0003.jpg",
  //     description: "He is the man the myth the legend"
  //   },
  //   {
  //     title: 'Pride and Prejudice',
  //     author: 'Jane Austen',
  //     imageUrl: "https://static.toiimg.com/thumb/msid-103711524,width-1280,height-720,resizemode-4/103711524.jpg"
  //   },
  //   {
  //     title: 'The Lord of the Rings',
  //     author: 'J.R.R. Tolkien',
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXcRkMBWPAQHM1il6uE4VDvXCmvnef2op1w&s",
  //     description: "He is the man the myth the legend"
  //   },
  //   {
  //     title: 'Pride and Prejudice',
  //     author: 'Jane Austen',
  //     imageUrl: "https://static.toiimg.com/thumb/msid-103711524,width-1280,height-720,resizemode-4/103711524.jpg"
  //   },

  // ];

  async function getBooks() {
    const response = await axios.get(BACKEND_URL + "/books", {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    });
    const resArr = response.data.bookRecommendations;
    //@ts-ignore
    let tempArray: [Map<string, string>] = [];

    for (let i = 0; i < resArr.length; i++) {
      const tempMap: Map<string, string> = new Map<string, string>(Object.entries(resArr[i]));
      tempArray.push(tempMap);
    }
    setBooks(tempArray);
  }

  function getBookData() {
    books.forEach((book: any) => {
      book.setItem("imageUrl","https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" );
      console.log(book.getItem("imageUrl"));
    })
  };

  async function promisifiedTimeout() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  useEffect(() => {
    getBooks();
    promisifiedTimeout();
    getBookData();

  }, [])

  if (books.length === 0) {
    return <div className="flex justify-center items-center h-screen w-screen text-4xl">
      Loading...
    </div>
  }

  return (
    <div className='dark:bg-[#121212] dark:text-white min-h-screen w-screen text-wrap'>
      <Grid2 container justifyContent="center">
        {books.map((book, index) => (
          //@ts-ignore
          <Grid2 key={index}>
            <BookCard book={book} />
          </Grid2>
        ))}
      </Grid2>
    </div>

  );
}