import { FC } from 'react';
import { ButtonProps } from './ButtonProps';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <Link
      to="/auth"
      className={cn(styles['button'], {
        [className]: className,
      })}>
      {children}
    </Link>
  );
};

export default Button;
