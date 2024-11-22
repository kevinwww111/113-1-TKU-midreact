import React, { useState, useEffect } from 'react';
import { Movie } from './types';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import './App.css';
import { fetchUpcomingMovies } from './services/movieService';  // 引入你的服务

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const upcomingMovies = await fetchUpcomingMovies();  // 获取即将上映的电影
      setMovies(upcomingMovies);  // 更新状态
    };

    fetchMovies();
  }, []);  // 空依赖数组表示只在组件挂载时运行一次

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