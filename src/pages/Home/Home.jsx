import { useState, useEffect } from 'react';
import API from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

import css from './Home.module.css';

const Home = () => {
  /* Создание состояния для списка популярных фильмов и индикатор загрузки */
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* 'useEffect' для получения популярных фильмов при загрузке страници */
  useEffect(
    () => {
      // Показ индикатора загрузки
      setIsLoading(true);

      // Получает список популярных фильмов
      getTrendingMovies();

      async function getTrendingMovies() {
        try {
          const fetchMovies = await API.fetchTrendingMovies();

          // Обновляем хук со списком фильмов
          setTrendingMovies(fetchMovies);
        } catch (error) {
          // Выводим ошибки обращения к API
          console.log(error);
        } finally {
          // Убираем индикатор загрузки
          setIsLoading(false);
        }
      }
    },

    // Пустой массив зависимостей для запуска хука при обновлении страници
    []
  );

  return (
    <main>
      <h2 className={css.nameMovies}>Trending today</h2>

      {isLoading && <Loader />}

      <ul className={css.moviesList}>
        {trendingMovies.map(({ id, title, poster_path, vote_average }) => (
          <MoviesItem
            key={id}
            id={id}
            title={title}
            imagePath={
              poster_path ? BASE_IMAGE_URL + poster_path : PlACEHOLDER_IMAGE_URL
            }
            vote={vote_average ? vote_average.toFixed(1) : 'No Vote'}
          />
        ))}
      </ul>
    </main>
  );
};

export default Home;
