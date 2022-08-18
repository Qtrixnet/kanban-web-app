import styles from './button.module.css';
import {FC, ReactNode, ReactElement} from 'react';

interface IButton {
  children: ReactNode | ReactElement,
  type?: string
}

const Button: FC<IButton> = ({children, type}) => {
  return (
    <button className={`${styles.button} ${type && styles[type]}`}>
      {children}
    </button>
  );
};

export default Button;
