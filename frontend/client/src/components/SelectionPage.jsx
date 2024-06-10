import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import './SelectionPage.css'; // Import the CSS file for this component

const SelectionPage = () => {
  const location = useLocation();
  const { image1, image2 } = location.state || {};

  return (
    <div className="selection-page-container">
      <h1>Selecte Image</h1>
      <div className="images-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="190"
              image={image1}
              alt="Uploaded Image 1"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="190"
              image={image2}
              alt="Uploaded Image 2"
            />
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default SelectionPage;
