import { useState } from 'react';
import './styleGaleria.scss';

const Galeria = ({ images, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseSelected = () => {
    setSelectedImage(null);
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="gallery-container" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery thumbnail ${index + 1}`}
              className="thumbnail-image"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        {selectedImage && (
          <div className='overlay'>

            <div className="enlarged-image-container">
              <img src={selectedImage} alt="Selected" className="enlarged-image" />
        <button className="close-selected" onClick={handleCloseSelected}>&times;</button>
            </div>

          </div>
        )}
        <button className="close-gallery" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default Galeria;
