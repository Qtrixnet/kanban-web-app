import styles from './sidebar.module.css';
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";
import {FC} from "react";
import ThemeSwitcher from "../theme-switcher/theme-switcher";

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <Logo/>
      </div>
      <div className={styles.container}>
        <Navigation/>
        <ThemeSwitcher/>
      </div>
    </div>
  );
};

export default Sidebar;
