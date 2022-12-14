import styles from './header.module.css';
import Logo from "../logo/logo";
import {FC, useCallback, useEffect, useState} from "react";
import {useAppSelector} from "../../services/hooks/useAppSelector";
import {useParams} from "react-router-dom";
import {IBoard} from "../../services/types/types";

const Header: FC = () => {
  const {id} = useParams();
  const [isMobile, setIsMobile] = useState<Boolean>(false);
  const [currentBoard, setCurrentBoard] = useState<IBoard | null>(null);
  const boards = useAppSelector(state => state.boards.data);
  const isSidebarShow = useAppSelector(state => state.sidebar.isSidebarShow);

  const checkWindowSize = useCallback(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false)
    }
  }, [])

  const findCurrentBoard = useCallback(() => boards?.find((board: IBoard) => board.id === id), [id]);

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize)

    return () => window.removeEventListener('resize', checkWindowSize)
  }, [])

  useEffect(() => setCurrentBoard(findCurrentBoard()), [id])

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
          {currentBoard && (<h1 className={styles.title}>{currentBoard?.title}</h1>)}
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
