import styles from './theme-switcher.module.css';
import {FC} from 'react';

const ThemeSwitcher: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label className={styles.switch}>
          <input className={styles.input} type="checkbox"/>
          <span className={styles.slider}></span>
        </label>
      </div>
      <button className={styles.hideSidebarButton}>
        <span className={styles.icon}/>
        Hide Sidebar
      </button>
    </div>
  );
};

export default ThemeSwitcher;
