import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import defaultImage from '../assets/file-upload-folders-775x465.jpg';

export default function Images({ imageUploaded }) {
  const imageToShow = imageUploaded || defaultImage;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="190"
          image={imageToShow}
          alt="Uploaded Image"
        />
      </CardActionArea>
    </Card>
  );
}
