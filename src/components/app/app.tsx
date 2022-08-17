import styles from './app.module.css';
import Header from "../header/header";
import {useAppSelector} from "../../services/hooks/useAppSelector";
import {useEffect} from "react";
import {useAppDispatch} from "../../services/hooks/useAppDispatch";
import {setIsThemeDark} from "../../services/actions/theme";

function App() {
  const dispatch = useAppDispatch();
  const isThemeDark = useAppSelector(state => state.theme.isThemeDark);

  return (
    <div className={`${styles.container} ${isThemeDark ? styles.themeDark : styles.themeLight}`}>
      <Header />
    </div>
  );
}

export default App;
