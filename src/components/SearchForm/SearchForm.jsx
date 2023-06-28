import { useState } from 'react';
import { toast } from 'react-toastify';
import { BiSearch } from 'react-icons/bi';

import css from './SearchForm.module.css';

import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit, onChange }) => {
  const [query, setQuery] = useState('');

  /* 'handleQueryChange' вызывается при изменении значения в поле ввода и обновляет 'setQuery', и передает измененное значение в родительский элемент через 'onChange' */
  const handleQueryChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
    onChange(evt.currentTarget.value.toLowerCase());
  };

  /* 'handleSubmit' блокирует обновление страници и проверяет, чтоб поле ввода было не пустое, после чего передает значение запроса в родительский компонент при помощи 'onSubmit'.*/
  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.warn('Enter your query in the search bar!');
    }

    onSubmit(query);
    setQuery('');
  };
  return (
    <div className={css.search__section}>
      <form className={css.search__form} onSubmit={handleSubmit}>
        <input
          className={css.search__input}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleQueryChange}
        />

        <button className={css.search__button} type="submit">
          <BiSearch size={23} />
        </button>
      </form>
    </div>
  );
};

SearchForm.propsType = {
  onSubmit: PropTypes.func.isRequired,
};
