import Categories from '../../components/Categories/Categories';
import DecorLine from '../../components/DecorLine/DecorLine';
import MoviesList from '../../components/MoviesList/MoviesList';
import Title from '../../components/Title/Title';

import styles from './CinemaNow.module.scss';

const categoriesList = [
  'Все',
  'Боевики',
  'Приключения',
  'Комедии',
  'Фантастика',
  'Триллеры',
  'Драма',
];

const CinemaNow = () => {
  return (
    <section className={styles['cinema-now']}>
      <div className="container">
        <div className={styles['cinema-now__inner']}>
          <div className={styles['cinema-now__top']}>
            <Title>Сейчас в кино</Title>
            <DecorLine />
            <Categories list={categoriesList} />
          </div>
          <MoviesList />
          <a className={styles['cinema-now__btn']} href="/">
            Все новинки
          </a>
        </div>
      </div>
    </section>
  );
};

export default CinemaNow;
