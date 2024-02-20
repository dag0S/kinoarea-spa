import { FC } from 'react';
import { TitleAuthProps } from './TitleAuthProps';
import cn from 'classnames';

import styles from './TitleAuth.module.scss';

const TitleAuth: FC<TitleAuthProps> = ({ className = 0, children }) => {
  return (
    <h3
      className={cn(styles['title'], {
        [className]: className,
      })}>
      {children}
    </h3>
  );
};

export default TitleAuth;
