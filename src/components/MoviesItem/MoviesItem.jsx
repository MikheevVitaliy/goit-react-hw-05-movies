import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './MoviesItem.module.css';

export const MoviesItem = ({ id, title, imagePath, vote }) => {
  const { pathname, search } = useLocation();
  const fromPage = `${pathname}${search}`;

  return (
    <li className={css.moviesCard__section}>
      <Link
        className={css.moviesCard__link}
        to={`/movies/${id}`}
        state={{ from: fromPage }}
      >
        <img className={css.moviesCard__img} src={imagePath} alt={title} />
        <div className={css.moviesCard__info}>
          <h4 className={css.moviesCard__info_title}>{title}</h4>
          <p className={css.moviesCard__info_text}>{vote}</p>
        </div>
      </Link>
    </li>
  );
};

MoviesItem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.string.isRequired,
};
