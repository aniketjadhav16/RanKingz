import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Images() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width='190'
          image="/static/images/cards/contemplative-reptile.jp"
          alt="Upload Image"
        />
        <CardContent>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
