import { useState, useEffect } from "react";
import "./styleGaleria.scss";
import Slider from "./Slider.jsx";

const Galeria = ({ images, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1450);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseSelected = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1450);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isWideScreen ? (
        <>
          {images.length >= 2 ? (
            <section className="overlay" onClick={onClose}>
              <article
                className="gallery-container"
                onClick={(e) => e.stopPropagation()}
              >
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
                  <section className="overlay">
                    <article className="enlarged-image-container">
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="enlarged-image"
                      />
                      <button
                        className="close-selected"
                        onClick={handleCloseSelected}
                      >
                        &times;
                      </button>
                    </article>
                  </section>
                )}
                <button className="close-gallery" onClick={onClose}>
                  &times;
                </button>
              </article>
            </section>
          ) : (
            <section className="overlay">
              <article className="enlarged-image-container">
                <img src={images} alt="Selected" className="enlarged-image" />
                <button className="close-selected" onClick={onClose}>
                  &times;
                </button>
              </article>
            </section>
          )}
        </>
      ) : (
        <>
          {images.length >= 2 ? (
            <section className="overlay">
              <article className="enlarged-image-container">
                <button className="close-selected" onClick={onClose}>
                  &times;
                </button>
                <Slider imagenes={images} />
              </article>
            </section>
          ) : (
            <section className="overlay">
              <article className="enlarged-image-container">
                <img src={images} alt="Selected" className="enlarged-image" />
                <button className="close-selected" onClick={onClose}>
                  &times;
                </button>
              </article>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Galeria;
