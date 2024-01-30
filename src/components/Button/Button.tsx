import { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonProps';

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <a href="/" className={styles['button']}>
      {children}
    </a>
  );
};

export default Button;
