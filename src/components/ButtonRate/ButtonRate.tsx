import { FC, useState } from 'react';
import { ButtonRateProps, ButtonVariant } from './ButtonRateProps';
import cn from 'classnames';

import styles from './ButtonRate.module.scss';

const ButtonRate: FC<ButtonRateProps> = ({ rate, amount }) => {
  const [isVoted, setIsVoted] = useState<boolean>(false);
  let icon;

  if (isVoted) amount++;

  if (rate === ButtonVariant.like) {
    icon = (
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_1775)" filter="url(#filter0_d_1_1775)">
          <path
            d="M8.23803 12.262H5.18512C4.76363 12.262 4.42188 12.6037 4.42188 13.0252V25.2366C4.42188 25.6581 4.76358 25.9999 5.18512 25.9999H8.23798C8.65946 25.9999 9.00122 25.6582 9.00122 25.2366V13.0252C9.00122 12.6037 8.65956 12.262 8.23803 12.262Z"
            fill="white"
          />
          <path
            d="M27.3049 14.2852C27.1703 13.1012 26.0643 12.2621 24.8727 12.2621H18.9225C19.4281 11.3566 19.6996 8.79556 19.6875 7.74937C19.6676 6.01763 18.2335 4.62988 16.5017 4.62988H15.8719C15.45 4.62988 15.1086 4.97123 15.1086 5.39312C15.1086 7.15802 14.4214 10.3436 13.1253 11.6398C12.253 12.5121 11.5072 12.8282 10.5293 13.317V24.769C12.0265 25.2681 13.9274 26.0001 16.8248 26.0001H21.8174C23.4625 26.0001 24.7437 24.4765 24.1062 22.8667C25.0774 22.6021 25.7937 21.7114 25.7937 20.6575C25.7937 20.3601 25.7363 20.0754 25.6327 19.8138C27.2693 19.3679 27.8717 17.3471 26.7358 16.0782C27.1531 15.612 27.3833 14.9743 27.3049 14.2852Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_1775"
            x="-1.12891"
            y="0"
            width="34"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1775" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_1775"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_1_1775">
            <rect width="26" height="26" fill="white" transform="translate(2.87109)" />
          </clipPath>
        </defs>
      </svg>
    );
  } else {
    icon = (
      <svg
        width="26"
        height="27"
        viewBox="0 0 26 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_1766)">
          <path
            d="M20.6331 14.6091L23.686 14.6091C24.1075 14.6091 24.4492 14.2674 24.4492 13.8459L24.4492 1.63445C24.4492 1.21296 24.1075 0.871204 23.686 0.871204L20.6331 0.871204C20.2116 0.871204 19.8699 1.21291 19.8699 1.63444L19.8699 13.8459C19.8699 14.2674 20.2115 14.6091 20.6331 14.6091Z"
            fill="white"
          />
          <path
            d="M1.56619 12.5859C1.70081 13.7698 2.80678 14.609 3.99836 14.609L9.94864 14.609C9.44296 15.5145 9.17153 18.0755 9.18357 19.1217C9.20353 20.8535 10.6376 22.2412 12.3694 22.2412L12.9992 22.2412C13.4211 22.2412 13.7625 21.8999 13.7625 21.478C13.7625 19.7131 14.4497 16.5275 15.7458 15.2313C16.6181 14.359 17.3639 14.0428 18.3418 13.5541L18.3418 2.10206C16.8446 1.60304 14.9437 0.871029 12.0463 0.871028L7.05365 0.871028C5.4086 0.871028 4.12739 2.39461 4.76485 4.00438C3.79366 4.26895 3.07744 5.15965 3.07744 6.21356C3.07744 6.51098 3.13482 6.79566 3.23842 7.05729C1.60179 7.5032 0.999374 9.52403 2.1353 10.7929C1.71798 11.2591 1.48784 11.8968 1.56619 12.5859Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1766">
            <rect
              width="26"
              height="26"
              fill="white"
              transform="translate(26 26.8711) rotate(-180)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <div className={styles['rating']}>
      <button
        className={cn(styles['rating__btn'], {
          [styles['rating__btn--is-voted']]: isVoted,
        })}
        onClick={() => setIsVoted((prev) => !prev)}>
        {icon}
      </button>
      <p className={styles['rating__counter']}>{amount}</p>
    </div>
  );
};

export default ButtonRate;
