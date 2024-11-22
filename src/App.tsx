import React, { useState, useEffect } from 'react';
import { Movie } from './types';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import './App.css';
import { getUpcomingMovies } from './services/movieService'; // 引入获取即将上映电影的函数

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // 初始为空的电影列表
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // 选中的电影
  const [showUpcoming, setShowUpcoming] = useState(false); // 是否显示即将上映电影

  // 获取即将上映电影
  const handleUpcomingMovies = async () => {
    console.log('Fetching upcoming movies...');
    const upcomingMovies = await getUpcomingMovies();
    setMovies(upcomingMovies); // 更新电影列表
    setShowUpcoming(true); // 标记显示即将上映的电影
  };

  return (
    <div className="App">
      <Header />
      <button onClick={handleUpcomingMovies}>Show Upcoming Movies</button> {/* 按钮来显示即将上映的电影 */}
      {showUpcoming && (
        <MovieList
          movies={movies}
          onMovieSelect={(movie: Movie) => setSelectedMovie(movie)}
        />
      )}
      {selectedMovie ? (
        <MovieDetail
          title={selectedMovie.title}
          releaseDate={selectedMovie.releaseDate}
          overview={selectedMovie.overview}
          posterPath={selectedMovie.posterPath}
          onClose={() => setSelectedMovie(null)}
        />
      ) : null}
      <Footer />
    </div>
  );
};

export default App;