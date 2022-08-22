import styles from './app.module.css';
import {useAppSelector} from "../../services/hooks/useAppSelector";
import {FC, useEffect} from "react";
import SidebarIcon from "../sidebar-icon/sidebar-icon";
import Sidebar from "../sidebar/sidebar";
import Main from "../main/main";
import {useNavigate} from "react-router-dom";

const App: FC = () => {
  const navigate = useNavigate();
  const isThemeDark = useAppSelector(state => state.theme.isThemeDark);
  const isSidebarShow = useAppSelector(state => state.sidebar.isSidebarShow);
  const boards = useAppSelector(state => state.boards.data);

  useEffect(() => {
    if(boards?.length > 0) {
      navigate(boards[0].id)
    }
  }, [])

  return (
    <div className={`
      ${styles.container}
      ${isThemeDark ? styles.themeDark : styles.themeLight}
      ${isSidebarShow ? styles.grid : ''}
    `}>
      {isSidebarShow ? (<Sidebar/>) : (<SidebarIcon/>)}
      <Main />
    </div>
  );
}

export default App;
