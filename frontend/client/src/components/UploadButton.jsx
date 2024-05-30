import React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function UploadButton({ setImageUploaded, id, onUpload }) {
  const handleFileSelect = (e) => {
    console.log(`Button with id ${id} was clicked`);
    
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUploaded(reader.result);
      };
      reader.readAsDataURL(file);
    }
    onUpload(id);
  };

  return (
    <>
      <input
        type="file"
        style={{ display: 'none' }}
        id={id}
        onChange={handleFileSelect}
        accept="image/*"
      />
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        htmlFor={id}
      >
        Upload Image
      </Button>
    </>
  );
}

export default UploadButton;
