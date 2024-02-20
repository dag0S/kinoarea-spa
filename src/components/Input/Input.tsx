import { FC } from 'react';
import { InputProps } from './InputProps';

import styles from './Input.module.scss';

const Input: FC<InputProps> = (props) => {
  return <input className={styles['input']} {...props} />;
};

export default Input;
