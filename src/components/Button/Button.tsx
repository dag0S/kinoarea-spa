import { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonProps';
import { Link } from 'react-router-dom';

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <Link to="/" className={styles['button']}>
      {children}
    </Link>
  );
};

export default Button;
