import styles from './Menu.module.scss';

const menu = [
  {
    name: 'Афиша',
    path: '/',
  },
  {
    name: 'Медиа',
    path: '/',
  },
  {
    name: 'Фильмы',
    path: '/',
  },
  {
    name: 'Актёры',
    path: '/',
  },
  {
    name: 'Новости',
    path: '/',
  },
  {
    name: 'Подборки',
    path: '/',
  },
  {
    name: 'Категории',
    path: '/',
  },
];

const Menu = () => {
  return (
    <ul className={styles['menu']}>
      {menu.map(({name, path}, index) => (
        <li key={index}>
          <a href={path}>{name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
