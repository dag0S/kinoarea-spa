import styles from './Button.module.scss';

const Button = ({ children }) => {
  return <a href='/' className={styles['button']}>{children}</a>;
};

export default Button;
