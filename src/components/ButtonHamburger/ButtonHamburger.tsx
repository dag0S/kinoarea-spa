import { FC } from 'react';
import { ButtonHamburgerProps } from './ButtonHamburgerProps';

import styles from './ButtonHamburger.module.scss';

const ButtonHamburger: FC<ButtonHamburgerProps> = ({ onClick }) => {
  return (
    <button className={styles['btn']} onClick={onClick}>
      <img src="/public/svg/hamburger-categories.svg" alt="категории" />
    </button>
  );
};

export default ButtonHamburger;
