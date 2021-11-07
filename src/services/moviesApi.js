import axios from 'axios';

const API_KEY = '4444c186d8016dd337b1527a507fbda9';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

//фильмы дня
export async function getMovies() {
  const {
    data: { results },
  } = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return results;
}

//фильм по ID
export async function getMovieById(movieId) {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  return data;
}
