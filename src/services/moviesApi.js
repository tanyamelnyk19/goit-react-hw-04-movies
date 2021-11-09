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

// запрос о касте
export async function getMovieCastById(movieId) {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  return data;
}

// запрос об отзывах
export async function getMovieReviewsById(movieId) {
  const {
    data: { results },
  } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
  return results;
}

// поиск фильмов по ключевому слову
export async function getMoviesByQuery(query) {
  const {
    data: { results },
  } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
  );
  return results;
}
