import css from './Reviews.module.css';
import API from '../../services/api';
// import { useState, useEffect } from 'react';
const { useState, useEffect } = require('react');
// import { useParams } from 'react-router-dom';
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  /* useEffect() Выполняет функфию "getMovieReviews" при каждом обновлении компонента. Функция запрашивает отзывы о фильме с API при помощи метода
  "fetchMovieReviews" импортирован с API. Полученные отзывы сохраняются в хуке setReviews(). */
  useEffect(() => {
    getMovieReviews();

    async function getMovieReviews() {
      const fetchReviews = await API.fetchMovieReviews(movieId);
      // console.log(fetchReviews);
      setReviews(fetchReviews);
    }
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.reviews__section}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviews__list}>
              <h4 className={css.reviews__title}>Author: {author}</h4>
              <p className={css.reviews__text}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
