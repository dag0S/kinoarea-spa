import Categories from '../../components/Categories/Categories';
import Title from '../../components/Title/Title';
import styles from './PopularPeople.module.scss';

const dateList = ['За год', 'За месяц', 'За неделю'];

const PopularPeople = () => {
  return (
    <section className={styles['popular-people']}>
      <div className="container">
        <div className={styles['popular-people__inner']}>
          <div className={styles['popular-people__top-wrap']}>
            <Title>Популярные персоны</Title>
            <Categories list={dateList} />
          </div>
          <div className={styles['popular-people__top-lost']}>
            <div className={styles['popular-people__top-2']}>
              <a className={styles['popular-people-card']} href="#">
                <img src="/public/img/demo/popular-people.png" alt="" />
                <p className={styles['popular-people-card__rating']}>1-е место</p>
                <div className={styles['popular-people-card__description']}>
                  <h5 className={styles['popular-people-card__ru-name']}>Квентин Тарантино</h5>
                  <p className={styles['popular-people-card__en-name']}>Quentin Tarantino</p>
                  <p className={styles['popular-people-card__age']}>57 лет</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPeople;
