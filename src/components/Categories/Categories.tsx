import { useState } from 'react';
import styles from './Categories.module.scss';

const Categories = ({ list }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <ul className={styles['categories']}>
      {list.map((category, index) => (
        <li
          key={index}
          onClick={() => setActiveItem(index)}
          className={activeItem === index ? styles['active'] : ''}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
