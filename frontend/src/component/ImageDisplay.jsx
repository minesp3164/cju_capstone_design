import React from 'react';

const ImageDisplay = ({ images }) => {
  return (
    <div className="image-display">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={`data:image/jpeg;base64,${image.image}`} alt={image.name} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
