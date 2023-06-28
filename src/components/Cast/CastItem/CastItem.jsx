import PropTypes from 'prop-types';

import css from './CastItem.module.css';

export const CastItem = ({ imagePath, name, character }) => {
  return (
    <li className={css.castItem__list}>
      <img
        className={css.castItem__img}
        src={imagePath}
        alt={name}
        width="100"
      />

      <div className={css.castItem__info}>
        <h4>{name}</h4>
        <p className={css.castItem__character}>
          Character: <br />
          {character}
        </p>
      </div>
    </li>
  );
};

CastItem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
