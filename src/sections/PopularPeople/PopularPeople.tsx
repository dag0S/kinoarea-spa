import Categories from '../../components/Categories/Categories';
import Title from '../../components/Title/Title';
import PopularPeopleList from '../../components/PopularPeopleList/PopularPeopleList';
import { FC, useState } from 'react';
import MenuModal from '../../components/MenuModal/MenuModal';

import styles from './PopularPeople.module.scss';
import ButtonHamburger from '../../components/ButtonHamburger/ButtonHamburger';

const dateList: string[] = ['За год', 'За месяц', 'За неделю'];

const PopularPeople: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <section className={styles['popular-people']}>
      <div className="container">
        <div className={styles['popular-people__inner']}>
          <div className={styles['popular-people__top-wrap']}>
            <Title>Популярные персоны</Title>
            <Categories list={dateList} className={styles['hidden']} />
            <ButtonHamburger onClick={() => setIsVisible(true)} />
          </div>
          <PopularPeopleList />
        </div>
      </div>
      {isVisible && (
        <MenuModal onClick={() => setIsVisible(false)}>
          <Categories list={dateList} />
        </MenuModal>
      )}
    </section>
  );
};

export default PopularPeople;
