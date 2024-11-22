import axios from 'axios';
import { Movie } from '../types';

const API_KEY = 'a1b4e5017eaecc98bb96575c12d1c4d3';  // 使用你的 TMDB API 密钥
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,  // 你可以根据需要调整页数
      },
    });
    return response.data.results;  // 返回电影列表
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

export { fetchUpcomingMovies };