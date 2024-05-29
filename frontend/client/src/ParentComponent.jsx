// ParentComponent.jsx
import React, { useState } from 'react';
import Images from './components/Images';
import UploadButton from './components/UploadButton';

function ParentComponent() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Callback function to set the selected image
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {/* Photo display component */}
      <Images image={selectedImage} />
      {/* Upload button component */}
      <UploadButton onUpload={handleImageSelect} />
    </div>
  );
}

export default ParentComponent;
