import { FC } from 'react';
import { FormProps } from './FormProps';
import cn from 'classnames';

import styles from './Form.module.scss';

const Form: FC<FormProps> = ({ children, className = '' }) => {
  return (
    <form
      className={cn(styles['form'], {
        [className]: className,
      })}
      action="#">
      {children}
    </form>
  );
};

export default Form;
