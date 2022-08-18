import styles from './sidebar-icon.module.css';
import {useAppDispatch} from "../../services/hooks/useAppDispatch";
import {setIsSidebarShow} from "../../services/actions/sidebar";
import {FC} from "react";

const SidebarIcon: FC = () => {
  const dispatch = useAppDispatch();

  const handleShowSidebar = () => dispatch(setIsSidebarShow(true));

  return (
    <button onClick={handleShowSidebar} className={styles.icon}/>
  );
};

export default SidebarIcon;
