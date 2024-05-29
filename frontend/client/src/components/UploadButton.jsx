import React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function UploadButton({ setImageUploaded }) {
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUploaded(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input
        type="file"
        style={{ display: 'none' }}
        id="file-input"
        onChange={handleFileSelect}
        accept="image/*"
      />
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        htmlFor="file-input"
      >
        Upload Image
      </Button>
    </>
  );
}

export default UploadButton;
