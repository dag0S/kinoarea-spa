import { useEffect, useState } from 'react';
import styles from './PopularPeopleList.module.scss';

const PopularPeopleList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // HYF139P-VWFMMNV-KD6YZB6-RJWSQE2
    // HC8S314-K8XMMYQ-NCWJB2M-HZCM394

    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': 'HYF139P-VWFMMNV-KD6YZB6-RJWSQE2' },
    };

    // 'https://api.kinopoisk.dev/v1.4/person?page=1&limit=10&notNullFields=name&notNullFields=enName&notNullFields=photo&notNullFields=age&sortField=movies.rating&sortType=1&movies.rating=6-10&sortField=updatedAt&sortType=-1&updatedAt=26.01.2022-26.01.2024'

    fetch(
      'https://api.kinopoisk.dev/v1.4/person?page=1&limit=10&notNullFields=name&notNullFields=enName&notNullFields=photo&notNullFields=age',
      options,
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(response.docs);
        setData(response.docs);
      })
      .catch((err) => console.error(err));
  }, []);

  const peopleList = data.map((item, index) => {
    if (index < 2) {
      return (
        <a className={styles['popular-people-card']} href="#" key={item.id}>
          <div className={styles['popular-people-card__img']}>
            <div className={styles['popular-people-card__overlay']} />
            <img src={item.photo} alt={item.name} />
          </div>
          <p className={styles['popular-people-card__rating']}>{index + 1}-е место</p>
          <div className={styles['popular-people-card__description']}>
            <h5 className={styles['popular-people-card__ru-name']}>{item.name}</h5>
            <p className={styles['popular-people-card__en-name']}>{item.enName}</p>
            <p className={styles['popular-people-card__age']}>{item.age} лет</p>
          </div>
        </a>
      );
    } else {
      return (
        <li className={styles['scroll-list__item']} key={item.id}>
          <a className={styles['scroll-list__item-inner']} href="#">
            <div className={styles['scroll-list__item-description']}>
              <h5 className={styles['scroll-list__item-ru-name']}>{item.name}</h5>
              <p className={styles['scroll-list__item-en-name']}>{item.enName}</p>
              <p className={styles['scroll-list__item-age']}>{item.age} лет</p>
            </div>
            <p className={styles['scroll-list__item-rating']}>{index + 1}-е место</p>
          </a>
        </li>
      );
    }
  });

  return (
    <div className={styles['popular-people-list']}>
      <div className={styles['popular-people-list__top-2']}>
        {peopleList.filter((_, index) => index < 2)}
      </div>
      <div className={styles['scroll-list']}>
        <ul className={styles['scroll-list__list']}>
          {peopleList.filter((_, index) => index >= 2)}
        </ul>
      </div>
    </div>
  );
};

export default PopularPeopleList;
