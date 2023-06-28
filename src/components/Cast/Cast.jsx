import API from '../../services/api';
import { useState, useEffect } from 'react';
import { CastItem } from './CastItem/CastItem';

import { useParams } from 'react-router-dom';
// const { useParams } = require('react-router-dom');

import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';
// const {
//   BASE_IMAGE_URL,
//   PlACEHOLDER_IMAGE_URL,
// } = require('constants/constants');

import css from './Cast.module.css';

// =============================?
const Cast = () => {
  /*  "movieId" получает с URL-адреса при помощи хука "useParams" */
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  /* "useEffect" вызывает функцию "getMovieCredits" при изменении "movieId". Эта вункция получает список актеров с 'API' при помощи функции
  "fetchMovieCredits", обрезает список до первых 16 актеров и обновляет хук "cast". */
  useEffect(() => {
    getMovieCredits();

    async function getMovieCredits() {
      try {
        const fetchCast = await API.fetchMovieCredits(movieId);

        const actors =
          fetchCast.length > 16 ? fetchCast.slice(0, 16) : fetchCast;

        // console.log(actors);
        setCast(actors);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);
  /*  Проверка списка актеров на известность, если нет, то возвращаем 'null' */
  if (!cast) return null;

  return (
    <ul className={css.cast__list}>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <CastItem
          key={id}
          imagePath={
            profile_path ? BASE_IMAGE_URL + profile_path : PlACEHOLDER_IMAGE_URL
          }
          name={original_name}
          character={character}
        />
      ))}
    </ul>
  );
};

export default Cast;
