import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Book {
  title: string;
  author: string;
  imageUrl?: string;
  description?: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '16px', backgroundColor: "#1E1E1E", color: "white", borderRadius: "10px" }}>
      <CardMedia
        component="img"
        height="140"
        image={book.imageUrl}
        alt={book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography sx={{ color: "#F4A261" }} variant="body2" color="text.secondary">
          {book.author}
        </Typography>
        {book.description && (
          <Typography sx={{ color: "#8AB4F8" }} variant="body2" color="text.secondary">
            {book.description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;