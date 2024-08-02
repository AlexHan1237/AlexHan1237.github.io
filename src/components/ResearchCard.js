import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ResearchCard() {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 355 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/img/alex_ai.png"
        title="Research"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Research on AI
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Research on AI-aided medical diagnostics
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" href="Research">Learn More</Button>
      </CardActions>
    </Card>
  );
}