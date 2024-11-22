import React, { useState, useEffect } from 'react';
import { Movie } from './types'; // 导入 Movie 类型
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import './App.css';
import axios from 'axios'; // 确保你已经安装了 axios

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // 存储电影数据
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]); // 存储即将上映的电影数据
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // 选中的电影

  // 模拟加载数据的 useEffect
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

  // 获取即将上映的电影
  const fetchUpcomingMovies = async () => {
    try {
      const apiKey = 'YOUR_TMDB_API_KEY'; // 替换为你的 TMDB API 密钥
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
      );
      setUpcomingMovies(response.data.results); // 更新状态，保存即将上映的电影数据
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      
      {/* 按钮，点击后显示即将上映的电影 */}
      <button onClick={fetchUpcomingMovies}>Show Upcoming Movies</button>

      {/* 如果选择了电影，则显示电影详情 */}
      {selectedMovie ? (
        <MovieDetail
          title={selectedMovie.title}
          releaseDate={selectedMovie.releaseDate}
          overview={selectedMovie.overview}
          posterPath={selectedMovie.posterPath}
          onClose={() => setSelectedMovie(null)}
        />
      ) : (
        // 显示即将上映的电影
        <MovieList
          movies={upcomingMovies}  // 使用即将上映的电影数据
          onMovieSelect={(movie: Movie) => setSelectedMovie(movie)}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;