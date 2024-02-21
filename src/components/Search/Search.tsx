import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SearchProps } from './SearchProps';

import styles from './Search.module.scss';

const Search: FC<SearchProps> = ({ onClick }) => {
  return (
    <div className={styles['search']}>
      <div className={styles['search__container']}>
        <form className={styles['search__form']} action="#">
          <input
            className={styles['search__input']}
            id="search"
            type="text"
            placeholder="Поиск ..."
          />
          <Link
            className={styles['search__advanced-search']}
            to="/advanced-search"
            onClick={onClick}>
            <img src="/svg/advanced-search.svg" alt="расширенный поиск" />
          </Link>
          <label htmlFor="search" className={styles['search__label']}>
            <img src="/svg/lupa-search.svg" alt="лупа" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Search;
