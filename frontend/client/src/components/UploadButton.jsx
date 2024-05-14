import React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const UploadButton = ({ onUpload }) => {
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <>
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
        accept="image/*"
      />
      
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        htmlFor="file-input"
      >
        Upload Image
        <input id="file-input" type="file" style={{ display: 'none' }} />
      </Button>
    </>
  );
};

export default UploadButton;
