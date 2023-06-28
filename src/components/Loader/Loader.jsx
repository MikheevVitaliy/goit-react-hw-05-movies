import { ColorRing } from 'react-loader-spinner';

import css from './Loader.module.css';

export const Loader = () => {
  <div className={css.loader__section}>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['gray', '#f47e60', '#f8b26a', '#f47e60', 'gray']}
    />
  </div>;
};
