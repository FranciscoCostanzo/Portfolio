import { useState } from 'react';
import "./styleCard.scss";
import Galeria from './Galeria.jsx';

const Card = ({ title, subtitle, content, images, instagram, facebook, website }) => {
  const [abrirGaleria, setAbrirGaleria] = useState(false);

  const handleAbrirGaleria = () => {
    setAbrirGaleria(true);
  };

  const handleCerrarGaleria = () => {
    setAbrirGaleria(false);
  };

  return (
    <>
      <li className="link-card" onClick={handleAbrirGaleria}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{content}</p>
        <img src={images[0]} alt={title} className="card-image" />
        <p>Puedes ver más de este trabajo en:</p>
        <div className="social-links">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </a>
          )}
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-www" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
              </svg>
            </a>
          )}
        </div>
      </li>
      {abrirGaleria && <Galeria images={images} onClose={handleCerrarGaleria} />}
    </>
  );
};

export default Card;
