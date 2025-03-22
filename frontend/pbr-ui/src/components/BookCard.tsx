import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RatingsComponent from './RatingsComponent';
import DescriptionModal from './DescriptionModal';

interface Book {
  title: string;
  author: string;
  imageUrl?: string;
  description?: string;
}

interface BookCardProps {
  book: Map<string, string>;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  function handleLearnMore() {
    setIsOpen(true);
  }
  // console.log(book);

  return (
    <div>
      <DescriptionModal description={book.get("description") ?? ""} isOpen={isOpen} setIsOpen={setIsOpen}></DescriptionModal>
      <Card sx={{ maxWidth: 345, margin: '16px', backgroundColor: "#1E1E1E", color: "white", borderRadius: "10px" }}>
      <CardMedia
        component="img"
        height="140"
        image={book.get("imageUrl")}
        alt={book.get("title")}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.get("title")}
        </Typography>
        <Typography sx={{ color: "#F4A261" }} variant="body2" color="text.secondary">
          {book.get("title")}
        </Typography>
        <Typography className='pt-2'>
          <RatingsComponent></RatingsComponent>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLearnMore}>Learn More</Button>
      </CardActions>
    </Card>
    </div>
    
  );
};

export default BookCard;