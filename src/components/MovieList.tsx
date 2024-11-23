import React from 'react';
import { Movie } from '../types'; // 导入 Movie 类型

interface MovieListProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieSelect }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No upcoming movies available.</p> // 如果没有电影数据，显示此信息
      ) : (
        movies.map((movie) => (
          <div key={movie.id} onClick={() => onMovieSelect(movie)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              alt={movie.title}
              style={{ width: 200 }}
            />
            <h3>{movie.title}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;

