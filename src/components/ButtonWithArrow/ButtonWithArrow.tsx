import { FC } from 'react';
import styles from './ButtonWithArrow.module.scss';
import { ButtonWithArrowProps } from './ButtonWithArrowProps';

const ButtonWithArrow: FC<ButtonWithArrowProps> = ({ children }) => {
  return (
    <a className={styles['button']} href="#">
      {children}
      <img src="/svg/arrow.svg" alt="стрелка" />
    </a>
  );
};

export default ButtonWithArrow;
