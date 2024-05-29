import React, { useState } from 'react';
import './App.css';

// Components
import Images from './components/Images';
import UploadButton from './components/UploadButton';

function App() {
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');

  return (
    <>
      <div>
        <h1>Welcome to RanKingz</h1>
        <h4>Here you can vote for photos and get them at the top of the leaderboard</h4>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '100px' }}>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Images imageUploaded={image1} />
          <UploadButton setImageUploaded={setImage1} />
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Images imageUploaded={image2} />
          <UploadButton setImageUploaded={setImage2} />
        </div>
      </div>
    </>
  );
}

export default App;
