import styles from './sidebar.module.css';
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";
import {FC} from "react";

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <Logo/>
      </div>
      <div className={styles.container}>
        <Navigation/>
        <div>
          <div>
            переключатель темы
          </div>
          <button>Hide Sidebar</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
