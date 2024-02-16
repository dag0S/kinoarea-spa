import { FC, useState } from 'react';
import Categories from '../../components/Categories/Categories';
import DecorLine from '../../components/DecorLine/DecorLine';
import Slider from '../../components/Slider/Slider';
import Title from '../../components/Title/Title';
import ButtonHamburger from '../../components/ButtonHamburger/ButtonHamburger';
import MenuModal from '../../components/MenuModal/MenuModal';

import styles from './PopularFilms.module.scss';

const categoriesList: string[] = ['Всё время', '2020', '2019', '2018', '2017', '2016', '2015'];

const PopularFilms: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <section className={styles['popular-films']}>
      <div className="container">
        <div className={styles['popular-films__inner']}>
          <div className={styles['popular-films__top-wrap']}>
            <Title>Популярные фильмы</Title>
            <ButtonHamburger onClick={() => setIsVisible(true)} />
            <DecorLine />
            <Categories list={categoriesList} className={styles['hidden']} />
          </div>
          <Slider idSlider={0} />
        </div>
      </div>
      {isVisible && (
        <MenuModal onClick={() => setIsVisible(false)}>
          <Categories list={categoriesList} />
        </MenuModal>
      )}
    </section>
  );
};

export default PopularFilms;
