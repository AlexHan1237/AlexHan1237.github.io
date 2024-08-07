import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Link } from '@mui/material';

export default function MeCard() {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 355 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/img/alex_myself.png"
        title="Myself"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Myself
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="Me">Learn More</Button>        
      </CardActions>
    </Card>
  );
}