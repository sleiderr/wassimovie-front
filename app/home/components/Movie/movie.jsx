import React, { useState } from 'react';
import './movie.css';
import { useRouter } from 'next/navigation';

const Movie = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const router = useRouter();
  function onClick() {
    router.push(`/movie/${movie.imdb_id}`)
  }

  return (
    <a href={`/movie/${movie.imdb_id}`}>
    <div
      className="movie-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {movie.poster_path && <img
        src={process.env.imdbPhotoURL + movie.poster_path}
        alt={movie.title}
        className="movie-poster"
      />}
      <div className={`movie-overlay ${isHovered ? 'visible' : ''}`}>
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.release_date}</p>
      </div>
    </div>
    </a>
  );
};

export default Movie;
