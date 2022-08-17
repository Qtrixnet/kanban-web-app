import styles from './logo.module.css';
import {useAppSelector} from "../../services/hooks/useAppSelector";

const Logo  = () => {
  const isThemeDark = useAppSelector(state => state.theme.isThemeDark);

  return (
    <div className={`${styles.icon} ${isThemeDark ? styles.iconLight : ''}`}/>
  );
};

export default Logo ;
