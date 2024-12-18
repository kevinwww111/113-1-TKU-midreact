import React, { useState, useEffect } from 'react';
import { Movie } from './types';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import './App.css';
import { getUpcomingMovies } from './services/movieService'; // 引入即將上映電影函数

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // 初始為空的電影列表
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // 選中的電影
  const [showUpcoming, setShowUpcoming] = useState(false); 

  // 獲取即將上映電影
  const handleUpcomingMovies = async () => {
    console.log('Fetching upcoming movies...');
    const upcomingMovies = await getUpcomingMovies();
    setMovies(upcomingMovies); 
    setShowUpcoming(true); 
  };

  return (
    <div className="App">
      <Header />
      <button className="upcoming-button" onClick={handleUpcomingMovies}>
        Show Upcoming Movies
      </button>
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
      <Footer />
    </div>
  );
};

export default App;