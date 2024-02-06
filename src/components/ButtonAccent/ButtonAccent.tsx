import { FC } from 'react';
import { ButtonAccentProps } from './ButtonAccentProps';

import styles from './ButtonAccent.module.scss';

const ButtonAccent: FC<ButtonAccentProps> = ({ children }) => {
  return <button className={styles['button-accent']}>{children}</button>;
};

export default ButtonAccent;
