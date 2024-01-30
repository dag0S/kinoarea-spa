import styles from './PopularPeople.module.scss';

import Categories from '../../components/Categories/Categories';
import Title from '../../components/Title/Title';
import PopularPeopleList from '../../components/PopularPeopleList/PopularPeopleList';
import { FC } from 'react';

const dateList: string[] = ['За год', 'За месяц', 'За неделю'];

const PopularPeople: FC = () => {
  return (
    <section className={styles['popular-people']}>
      <div className="container">
        <div className={styles['popular-people__inner']}>
          <div className={styles['popular-people__top-wrap']}>
            <Title>Популярные персоны</Title>
            <Categories list={dateList} />
          </div>
          <PopularPeopleList />
        </div>
      </div>
    </section>
  );
};

export default PopularPeople;
