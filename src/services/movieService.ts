export const fetchUpcomingMovies = async () => {
  const apiKey = 'a1b4e5017eaecc98bb96575c12d1c4d3';
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;  // 返回即將上映電影的數據
  } catch (error) {
    console.error("無法獲取電影資料", error);
    return [];
  }
};