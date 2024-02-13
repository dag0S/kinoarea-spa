import { FC, useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories';
import DecorLine from '../../components/DecorLine/DecorLine';
import Title from '../../components/Title/Title';
import MovieItem from '../../components/MovieItem/MovieItem';

import styles from './CinemaNow.module.scss';
import axios from 'axios';
import { IMovie } from '../../types/types';

// HYF139P-VWFMMNV-KD6YZB6-RJWSQE2
// HC8S314-K8XMMYQ-NCWJB2M-HZCM394

const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'X-API-KEY': 'HYF139P-VWFMMNV-KD6YZB6-RJWSQE2' },
};

const categoriesList: string[] = [
  'Все',
  'Боевики',
  'Приключения',
  'Комедии',
  'Фантастика',
  'Триллеры',
  'Драма',
];

const CinemaNow: FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=8&selectFields=id&selectFields=name&selectFields=rating&selectFields=genres&selectFields=poster&selectFields=videos&type=anime&year=2022-2024',
        options,
      );
      setMovies(data.docs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className={styles['cinema-now']}>
      <div className="container">
        <div className={styles['cinema-now__inner']}>
          <div className={styles['cinema-now__top']}>
            <Title>Сейчас в кино</Title>
            <DecorLine />
            <Categories list={categoriesList} />
          </div>
          <div className={styles['movies']}>
            {movies.length > 0 &&
              movies.map(({ name, genres, rating, poster, id }) => (
                <MovieItem name={name} genres={genres} poster={poster} rating={rating} key={id} />
              ))}
          </div>
          <div className={styles['cinema-now__wrap-btn']}>
            <a className={styles['cinema-now__btn']} href="/">
              Все новинки
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinemaNow;
