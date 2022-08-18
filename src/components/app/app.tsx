import styles from './app.module.css';
import Header from "../header/header";
import {useAppSelector} from "../../services/hooks/useAppSelector";
import {FC} from "react";
import SidebarIcon from "../sidebar-icon/sidebar-icon";
import Sidebar from "../sidebar/sidebar";

const App: FC = () => {
  const isThemeDark = useAppSelector(state => state.theme.isThemeDark);
  const isSidebarShow = useAppSelector(state => state.sidebar.isSidebarShow);

  return (
    <div className={`
      ${styles.container}
      ${isThemeDark ? styles.themeDark : styles.themeLight}
      ${isSidebarShow ? styles.grid : ''}
    `}>
      {isSidebarShow ? (<Sidebar/>) : (<SidebarIcon/>)}
      <Header/>
    </div>
  );
}

export default App;
