import API from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import css from './Movies.module.css';

// Компонент фильмов
const Movies = () => {
  // Хуки для фиксации состояния
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 'useEffect', для получения списка фильмов при обновлении 'search query'
  useEffect(() => {
    if (!query) {
      // Если query пустая строка, значит запрос к API не делаем
      return;
    }
    setIsLoading(true);
    getSearchMovies();

    async function getSearchMovies() {
      try {
        // Запрос к API с введенной 'search query'
        const fetchMovies = await API.fetchSearchMovies(query);

        // Обновление списков фильмов
        setMovies(fetchMovies);
      } catch (error) {
        console.log(error);
        // Сообщение, что по запросу фильмов не найдено
        toast.error(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }
  }, [query]);

  // Обработка действия для подачи формы поиска
  const handleFormSubmit = query => {
    // console.log(query);

    // Обновляем 'search query' и список фильмов
    setQuery(query);
    setMovies([]);
  };

  // Обновляем 'search query' в адресной строке браузера
  const updateQueryString = value => {
    setSearchParams(value !== '' ? { search: value } : {});
  };

  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit} onChange={updateQueryString} />

      {isLoading && <Loader />}

      <ul className={css.movies__list}>
        {movies.map(({ id, title, poster_path, vote_average }) => (
          <MoviesItem
            key={id}
            id={id}
            title={title}
            imagePath={
              poster_path ? BASE_IMAGE_URL + poster_path : PlACEHOLDER_IMAGE_URL
            }
            vote={vote_average ? vote_average.toFixed(1) : 'No vote'}
          />
        ))}
      </ul>
    </main>
  );
};

export default Movies;
