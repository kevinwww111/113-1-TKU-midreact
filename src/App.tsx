import React, { useState, useEffect } from 'react';
import { Movie } from './types';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import './App.css';
import { getUpcomingMovies } from './services/movieService'; // 引入获取即将上映电影的函数

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // 电影列表
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // 选中的电影
  const [showUpcoming, setShowUpcoming] = useState(false); // 是否显示即将上映电影

  // 获取即将上映电影
  const handleUpcomingMovies = async () => {
    console.log('Fetching upcoming movies...');
    const upcomingMovies = await getUpcomingMovies();
    setMovies(upcomingMovies);
    setShowUpcoming(true);
  };

  return (
    <div className="App">
      <Header />
      <div className="button-container">
        <button onClick={handleUpcomingMovies}>Show Upcoming Movies</button>
      </div>
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