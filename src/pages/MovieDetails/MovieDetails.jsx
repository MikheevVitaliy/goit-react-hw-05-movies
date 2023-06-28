import { Suspense, useState, useEffect } from 'react';
import { Outlet, useParams, useLocation, NavLink } from 'react-router-dom';
import API from '../../services/api';
import { BackButton } from 'components/BackButton/BackButton';
import { BASE_IMAGE_URL, PlACEHOLDER_POSTER_URL } from 'constants/constants';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  // Хуки для получения 'movieId' и текущего пути роута
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { pathname, search } = useLocation();
  const fromPage = `${pathname}${search}`;

  // Хук 'useEffect' для получения данных о фильме с API
  useEffect(() => {
    getMovieById();

    async function getMovieById() {
      try {
        const fetchMovie = await API.fetchMovieById(Number(movieId));
        // console.log(fetchMovie);
        setMovie(fetchMovie);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  // Если данные о фильме не загрузились, возвращаем 'null'
  if (!movie) {
    return null;
  }
  // Вытягимаем данные о фильме (деструктуризация)
  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;

  // Формируем URL для изображения фильма
  const imagePath = poster_path
    ? BASE_IMAGE_URL + poster_path
    : PlACEHOLDER_POSTER_URL;

  // Вытягиваю год выхода фильма
  const year = release_date ? release_date.slice(0, 4) : 'No year';

  // Функция рейтинга фильма в процентах
  const userScore = () => {
    return Math.round(vote_average * 10);
  };

  return (
    <main>
      <BackButton>Go back</BackButton>

      <div className={css.details__container}>
        <img
          className={css.details__img}
          src={imagePath}
          alt={title}
          width="250"
        ></img>
        <div className={css.details__info}>
          <h2>
            {title}
            <span>({year})</span>
          </h2>
          <p>User Score {userScore()}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul className={css.details__card}>
            {genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={css.details__container_nav}>
        <h2 className={css.details__nav_title}>Additional infomation</h2>
        <ul className={css.details__nav_section}>
          <li>
            <NavLink
              className={css.details__nav_link}
              to="cast"
              state={{ from: fromPage }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={css.details__nav_link}
              to="reviews"
              state={{ from: fromPage }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
