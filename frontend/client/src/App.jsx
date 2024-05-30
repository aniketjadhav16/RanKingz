import React, { useState } from 'react';
import './App.css';

// Components
import Images from './components/Images';
import UploadButton from './components/UploadButton';
import LoadingButtons from './components/LoadingButtons';

function App() {
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [loading, setLoading] = useState(true);

  const handleUpload = (id) => {
    console.log(`Button with id ${id} was clicked`);
    if (id === 'file-input-2') {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div>
        <h1>Welcome to RanKingz</h1>
        <h4>Here you can vote for photos and get them at the top of the leaderboard</h4>
      </div>
      <div className="image-upload-container">
        <div className="image-upload">
          <Images imageUploaded={image1} />
          <UploadButton setImageUploaded={setImage1} id="file-input-1" onUpload={handleUpload} />
        </div>

        <div className="image-upload">
          <Images imageUploaded={image2} />
          <UploadButton setImageUploaded={setImage2} id="file-input-2" onUpload={handleUpload} />
        </div>
      </div>
      <div className="loading-buttons-container">
        <LoadingButtons loading={loading} />
      </div>
    </div>
  );
}

export default App;
