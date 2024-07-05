import { useState, useEffect, useRef } from "react";
import "./styleSlider.scss";

const Slider = ({ imagenes }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNextClick = () => {
    nextSlide();
    resetInterval();
  };

  const handlePrevClick = () => {
    prevSlide();
    resetInterval();
  };

  return (
    <div className="slider-wrapper">
      <div className="slider" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {imagenes.map((imagen, index) => (
          <div className="slide" key={index}>
            <img src={imagen} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrevClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-arrow-left"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#626d6f"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"></path>
          <path d="M8 12l4 4"></path>
          <path d="M8 12h8"></path>
          <path d="M12 8l-4 4"></path>
        </svg>
      </button>
      <button className="next" onClick={handleNextClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-arrow-right"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#626d6f"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18"></path>
          <path d="M16 12l-4 -4"></path>
          <path d="M16 12h-8"></path>
          <path d="M12 16l4 -4"></path>
        </svg>
      </button>
    </div>
  );
};

export default Slider;
