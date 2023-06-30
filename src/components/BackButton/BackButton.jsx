import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { useRef } from 'react';

import css from './BackButton.module.css';

export const BackButton = ({ children }) => {
  /*  Функция 'useLocation()' получает текущий URL страници и сохраняет в переменной 'location'. Далее с оператором '?'
     обращаемся до свойств 'state' с переменной 'location',
      которая содержит информацию о предыдущей странице. Если такая информация есть, значит получаем URL предыдушей страници и сохраняем в переменную 'backLinkHref'. Если информации нет, то устанавливаем URL страници по умолчанию на ("/"). */

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <Link className={css.back__link} to={backLinkHref.current}>
      <BsArrowLeft size={16} />
      {children}
    </Link>
  );
};
