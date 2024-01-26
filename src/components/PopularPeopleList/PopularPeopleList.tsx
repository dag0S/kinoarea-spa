import styles from './PopularPeopleList.module.scss';

const testList = [
  {
    id: 1,
    nameRu: 'Квентин Тарантино',
    nameEn: 'Quentin Tarantino',
    age: 57,
    imgPath: '/public/img/demo/popular-people.png',
  },
  {
    id: 2,
    nameRu: 'Квентин Тарантино',
    nameEn: 'Quentin Tarantino',
    age: 57,
    imgPath: '/public/img/demo/popular-people.png',
  },
  {
    id: 3,
    nameRu: 'Квентин Тарантино',
    nameEn: 'Quentin Tarantino',
    age: 57,
    imgPath: '/public/img/demo/popular-people.png',
  },
  {
    id: 4,
    nameRu: 'Квентин Тарантино',
    nameEn: 'Quentin Tarantino',
    age: 57,
    imgPath: '/public/img/demo/popular-people.png',
  },
  {
    id: 5,
    nameRu: 'Квентин Тарантино',
    nameEn: 'Quentin Tarantino',
    age: 57,
    imgPath: '/public/img/demo/popular-people.png',
  },
  {
    id: 6,
    nameRu: 'Квентин Тарантино',
    nameEn: 'Quentin Tarantino',
    age: 57,
    imgPath: '/public/img/demo/popular-people.png',
  },
  {
    id: 7,
    nameRu: 'Квентин Тарантино',
    nameEn: 'Quentin Tarantino',
    age: 57,
    imgPath: '/public/img/demo/popular-people.png',
  },
  {
    id: 8,
    nameRu: 'Квентин Тарантино',
    nameEn: 'Quentin Tarantino',
    age: 57,
    imgPath: '/public/img/demo/popular-people.png',
  },
  {
    id: 9,
    nameRu: 'Квентин Тарантино',
    nameEn: 'Quentin Tarantino',
    age: 57,
    imgPath: '/public/img/demo/popular-people.png',
  },
  {
    id: 10,
    nameRu: 'Квентин Тарантино',
    nameEn: 'Quentin Tarantino',
    age: 57,
    imgPath: '/public/img/demo/popular-people.png',
  },
];

const PopularPeopleList = () => {
  const peopleList = testList.map((item, index) => {
    if (index < 2) {
      return (
        <a className={styles['popular-people-card']} href="#" key={item.id}>
          <div className={styles['popular-people-card__img']}>
            <div className={styles['popular-people-card__overlay']} />
            <img src={item.imgPath} alt={item.nameRu} />
          </div>
          <p className={styles['popular-people-card__rating']}>{index + 1}-е место</p>
          <div className={styles['popular-people-card__description']}>
            <h5 className={styles['popular-people-card__ru-name']}>{item.nameRu}</h5>
            <p className={styles['popular-people-card__en-name']}>{item.nameEn}</p>
            <p className={styles['popular-people-card__age']}>{item.age} лет</p>
          </div>
        </a>
      );
    } else {
      return (
        <li className={styles['scroll-list__item']} key={item.id}>
          <a className={styles['scroll-list__item-inner']} href="#">
            <div className={styles['scroll-list__item-description']}>
              <h5 className={styles['scroll-list__item-ru-name']}>{item.nameRu}</h5>
              <p className={styles['scroll-list__item-en-name']}>{item.nameEn}</p>
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
