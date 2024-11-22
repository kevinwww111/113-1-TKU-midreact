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
    console.log('Fetching upcoming movies...'); // 打印日志查看是否触发
    const upcomingMovies = await getUpcomingMovies();
    console.log('Upcoming movies:', upcomingMovies); // 打印返回的电影列表
    setMovies(upcomingMovies);
    setShowUpcoming(true);
  };

  return (
    <div className="App">
      <Header />
      {/* 确保按钮是可见的 */}
      <button onClick={handleUpcomingMovies}>Show Upcoming Movies</button>
      
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