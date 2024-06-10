import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Images from './Images';
import UploadButton from './UploadButton';
import LoadingButtons from './LoadingButtons';
import '../App.css';

function ParentComponent() {
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve images from localStorage if they exist
    const storedImage1 = localStorage.getItem('file-input-1');
    const storedImage2 = localStorage.getItem('file-input-2');
    if (storedImage1) setImage1(storedImage1);
    if (storedImage2) setImage2(storedImage2);
  }, []);

  const handleUpload = (id) => {
    console.log(`Button with id ${id} was clicked`);
    if (id === 'file-input-2') {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    navigate('/selection-page', { state: { image1, image2 } });
  };

  return (
    <div className="parent-container">
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
        <LoadingButtons loading={loading} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default ParentComponent;
