import axios from 'axios';
import { Movie } from '../types';

const API_KEY = 'a1b4e5017eaecc98bb96575c12d1c4d3';
const API_URL = 'https://api.themoviedb.org/3/movie/upcoming';

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const apiKey = 'a1b4e5017eaecc98bb96575c12d1c4d3';
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      overview: movie.overview,
      posterPath: movie.poster_path,
    }));
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};


//* a1b4e5017eaecc98bb96575c12d1c4d3