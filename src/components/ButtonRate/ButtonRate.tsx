import { useState } from 'react';
import styles from './ButtonRate.module.scss';

const ButtonRate = ({ rate }) => {
  const rates = { like: '/svg/like.svg', dislike: '/svg/dislike.svg' };

  const [count, setCount] = useState(Math.trunc(Math.random() * 1000));

  return (
    <div className={styles['rating']}>
      <button
        className={styles['rating__btn']}
        onClick={
          rate === 'like' ? () => setCount((prev) => ++prev) : () => setCount((prev) => --prev)
        }>
        <img src={rates[rate]} alt="оценка" />
      </button>
      <p className={styles['rating__counter']}>{count}</p>
    </div>
  );
};

export default ButtonRate;
