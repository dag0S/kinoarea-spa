import styles from './ButtonWithArrow.module.scss';

const ButtonWithArrow = ({ children }) => {
  return (
    <a className={styles['button']} href="#">
      {children}
      <img src="/svg/arrow.svg" alt="стрелка" />
    </a>
  );
};

export default ButtonWithArrow;
