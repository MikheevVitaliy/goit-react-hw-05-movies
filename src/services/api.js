import axios from 'axios';
// Параметры для запроса на бэкенд
const apiInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    // api_Key: 'b0e0648964ab116875dee356a1ceb23b',
    api_key: 'b0e0648964ab116875dee356a1ceb23b',
    language: 'en-US',
  },
});

// Фукция получает список актуальных фильмов за сутки с TMDb и возращает их объектом
async function fetchTrendingMovies() {
  const response = await apiInstance.get('trending/movie/day');

  const trendingMovies = response.data.results;

  if (!trendingMovies.length) {
    throw new Error(`Sorry, there are no movies.`);
  }

  return trendingMovies;
}

//Функция получает подробности фильма по его id и возращает их объектом
async function fetchMovieById(id) {
  const { data } = await apiInstance.get(`movie/${id}`);

  return data;
}

//Функция для поиска фильмов по слову и возращает масив объктов
async function fetchSearchMovies(query) {
  const response = await apiInstance.get(`search/movie?query=${query}`);

  const searchMovies = response.data.results;

  if (!searchMovies.length) {
    throw new Error(
      `Sorry, there are no movies matching your search query. Please try again.`
    );
  }

  return searchMovies;
}

// Функция получает каст фильма по id и возращает масив объектов
async function fetchMovieCredits(id) {
  const response = await apiInstance.get(`movie/${id}/credits`);

  const cast = response.data.cast;

  if (!cast.length) {
    throw new Error(`Not found cast...`);
  }

  return cast;
}

// Функция получает рецензии фильма по id и возращает масив объектов
async function fetchMovieReviews(id) {
  const response = await apiInstance.get(`movie/${id}/reviews`);

  const reviews = response.data.results;

  return reviews;
}

//Объект с функциями, для обращения к API
const api = {
  fetchTrendingMovies,
  fetchMovieById,
  fetchSearchMovies,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default api;
