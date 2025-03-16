import BookCard from './components/BookCard';
import { Grid2 } from '@mui/material';

function App() {
  const books = [
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      imageUrl: "https://www.filmonpaper.com/wp-content/uploads/2011/05/TheLordOfTheRingsFellowshipOfTheRing_quad_UK-2.jpg",
      description: "He is the man the myth the legend"
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      imageUrl: "https://static.toiimg.com/thumb/msid-103711524,width-1280,height-720,resizemode-4/103711524.jpg"
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      imageUrl: "https://www.framecaplib.com/lotrlib/images/hauj/hauj0003.jpg",
      description: "He is the man the myth the legend"
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      imageUrl: "https://static.toiimg.com/thumb/msid-103711524,width-1280,height-720,resizemode-4/103711524.jpg"
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      imageUrl: "https://www.framecaplib.com/lotrlib/images/hauj/hauj0003.jpg",
      description: "He is the man the myth the legend"
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      imageUrl: "https://static.toiimg.com/thumb/msid-103711524,width-1280,height-720,resizemode-4/103711524.jpg"
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      imageUrl: "https://www.framecaplib.com/lotrlib/images/hauj/hauj0003.jpg",
      description: "He is the man the myth the legend"
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      imageUrl: "https://static.toiimg.com/thumb/msid-103711524,width-1280,height-720,resizemode-4/103711524.jpg"
    },

  ];

  return (
    <div><Grid2 container justifyContent="center">
      {books.map((book, index) => (
        //@ts-ignore
        <Grid2 item key={index}>
          <BookCard book={book} />
        </Grid2>
      ))}
    </Grid2></div>

  );
}

export default App;