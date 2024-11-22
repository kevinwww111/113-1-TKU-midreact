import React from 'react';
import { Movie } from '../types';

interface MovieListProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieSelect }) => {
  return (
    <div>
      {movies.length === 0 ? (
        <p>No upcoming movies found.</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} onClick={() => onMovieSelect(movie)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              alt={movie.title}
              style={{ width: '200px', height: '300px' }}
            />
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;