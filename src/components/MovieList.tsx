import React from 'react';
import { Movie } from '../types'; //導入 Movie 類型

interface MovieListProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieSelect }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movie available</p> // 如果没有電影數據，顯示此信息
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              alt={movie.title}
              style={{ width: 200 }}
              onClick={() => onMovieSelect(movie)} 
            />
            <h3>{movie.title}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;

