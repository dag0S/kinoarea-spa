import { FC, useState } from 'react';
import { CategoriesProps } from './CategoriesProps';
import cn from 'classnames';

import styles from './Categories.module.scss';

const Categories: FC<CategoriesProps> = ({ list, className = '' }) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  return (
    <ul className={cn(styles['categories'], className)}>
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
