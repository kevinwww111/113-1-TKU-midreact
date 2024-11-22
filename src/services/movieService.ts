import axios from 'axios';
import { Movie } from '../types';

const API_KEY = 'a1b4e5017eaecc98bb96575c12d1c4d3';
const API_URL = 'https://api.themoviedb.org/3/movie/upcoming';

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    console.log('API response:', response.data);  // 打印返回的数据
    return response.data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      releaseDate: movie.release_date,
      overview: movie.overview,
    }));
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};


// a1b4e5017eaecc98bb96575c12d1c4d3