import React, { useState, useEffect } from 'react';
import { Movie } from './types';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const mockMovies: Movie[] = [
        {
          id: 1,
          title: 'The Shawshank Redemption',
          posterPath: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
          releaseDate: '1994-09-23',
          overview: 'Two imprisoned men bond over a number of years...',
        },
        {
          id: 2,
          title: 'The Godfather',
          posterPath: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
          releaseDate: '1972-03-24',
          overview: 'The aging patriarch of an organized crime dynasty...',
        },
      ];
      setMovies(mockMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      {selectedMovie ? (
        <MovieDetail
          title={selectedMovie.title}
          releaseDate={selectedMovie.releaseDate}
          overview={selectedMovie.overview}
          posterPath={selectedMovie.posterPath}
          onClose={() => setSelectedMovie(null)}
        />
      ) : (
        <MovieList
          movies={movies}
          onMovieSelect={(movie: Movie) => setSelectedMovie(movie)}
        />
      )}
    </div>
  );
};

export default App;
