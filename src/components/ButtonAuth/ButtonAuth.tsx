import { FC } from "react";
import { ButtonAuthProps } from "./ButtonAuthProps";
import { Link } from "react-router-dom";

import styles from './ButtonAuth.module.scss'

const ButtonAuth: FC<ButtonAuthProps> = ({children, path}) => {
  return ( <Link to={path} className={styles['btn']}>{children}</Link> );
}
 
export default ButtonAuth;