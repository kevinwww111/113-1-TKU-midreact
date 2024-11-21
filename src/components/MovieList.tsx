import React from 'react';
import { Movie } from '../types';

type MovieListProps = {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
};

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieSelect }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => onMovieSelect(movie)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
            alt={movie.title}
            className="movie-poster"
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;