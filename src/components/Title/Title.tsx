import { FC } from 'react';
import styles from './Title.module.scss';
import { TitleProps } from './TitleProps';

const Title: FC<TitleProps> = ({ children }) => {
  return <h2 className={styles['title']}>{children}</h2>;
};

export default Title;
