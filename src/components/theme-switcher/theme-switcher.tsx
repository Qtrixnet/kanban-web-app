import styles from './theme-switcher.module.css';
import {FC} from 'react';
import {useAppDispatch} from "../../services/hooks/useAppDispatch";
import {setIsSidebarShow} from "../../services/actions/sidebar";
import {setIsThemeDark} from "../../services/actions/theme";
import {useAppSelector} from "../../services/hooks/useAppSelector";

const ThemeSwitcher: FC = () => {
  const dispatch = useAppDispatch();
  const isThemeDark = useAppSelector(state => state.theme.isThemeDark);

  const handleSwitchTheme = () => dispatch(setIsThemeDark(!isThemeDark));
  const handleHideSidebar = () => dispatch(setIsSidebarShow(false));

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label className={styles.switch}>
          <input
            onClick={handleSwitchTheme}
            className={styles.input}
            defaultChecked={isThemeDark}
            type="checkbox"
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <button
        onClick={handleHideSidebar}
        className={styles.hideSidebarButton}
      >
        <span className={styles.icon}/>
        Hide Sidebar
      </button>
    </div>
  );
};

export default ThemeSwitcher;
