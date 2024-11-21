import React, { useState, useEffect } from 'react';
import './MovieList.css';

type Movie = {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
};

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=YOUR_API_KEY');
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.releaseDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;