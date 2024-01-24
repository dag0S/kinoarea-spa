import Categories from '../../components/Categories/Categories';
import DecorLine from '../../components/DecorLine/DecorLine';
import Slider from '../../components/Slider/Slider';
import Title from '../../components/Title/Title';
import styles from './PopularFilms.module.scss';

const categoriesList = ['Всё время', '2020', '2019', '2018', '2017', '2016', '2015'];

const PopularFilms = () => {


  return (
    <section className={styles['popular-films']}>
      <div className="container">
        <div className={styles['popular-films__inner']}>
          <div className={styles['popular-films__top-wrap']}>
            <Title>Популярные фильмы</Title>
            <DecorLine />
            <Categories list={categoriesList} />
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default PopularFilms;
