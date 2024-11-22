import axios from 'axios';
import { Movie } from '../types';

const API_KEY = 'a1b4e5017eaecc98bb96575c12d1c4d3';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data.results.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    releaseDate: movie.release_date,
    overview: movie.overview,
  }));
};