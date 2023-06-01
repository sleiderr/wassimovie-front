import React from 'react';
import Movie from '../Movie/movie';

const MovieGrid = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;