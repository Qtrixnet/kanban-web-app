import styles from './header.module.css';
import Logo from "../logo/logo";
import {FC, useCallback, useEffect, useState} from "react";
import {useAppSelector} from "../../services/hooks/useAppSelector";

const Header: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isSidebarShow = useAppSelector(state => state.sidebar.isSidebarShow);

  const checkWindowSize = useCallback(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false)
    }
  }, [])

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize)

    return () => window.removeEventListener('resize', checkWindowSize)
  }, [])

  return (
    <header className={styles.header}>
      {
        !isSidebarShow && (
          <div className={styles.logoWrapper}>
            <Logo/>
          </div>
        )
      }
      <div className={`${styles.container} ${!isSidebarShow ? styles.border : ''}`}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Platform Launch</h1>
          {isMobile && <button className={styles.menuButton}/>}
        </div>
        <div className={styles.wrapper}>
          <button className={styles.addButton}>
            <span className={styles.addButtonText}>
              {isMobile ? '+' : '+ Add New Task'}
            </span>
          </button>
          <button className={styles.options}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
