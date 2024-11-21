// 定義 Movie 接口，用於約束電影數據的類型
export interface Movie {
    id: number;
    title: string;
    releaseDate: string;
    overview: string;
    posterPath: string;
  }
  
  // API 基本配置
  const API_URL = 'https://api.themoviedb.org/3/movie';
  const API_KEY = 'a1b4e5017eaecc98bb96575c12d1c4d3'; // 請替換為你的 TMDB API 金鑰
  
  /**
   * 從 TMDB API 獲取熱門電影列表
   * @returns Promise<Movie[]> 返回電影列表
   */
  export const fetchMovies = async (): Promise<Movie[]> => {
    try {
      const response = await fetch(`${API_URL}/popular?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      return data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        overview: movie.overview,
        posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };
  
  /**
   * 獲取單部電影的詳細信息
   * @param id - 電影的唯一 ID
   * @returns Promise<Movie> 返回電影詳細信息
   */
  export const fetchMovieDetail = async (id: number): Promise<Movie> => {
    try {
      const response = await fetch(`${API_URL}/${id}?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const movie = await response.json();
      return {
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        overview: movie.overview,
        posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      };
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  };