import styles from "./navigation.module.css";
import BoardIcon from "../board-icon/board-icon";
import NavigationLink from "../navigation-link/navigation-link";
import {FC} from "react";
import {useAppSelector} from "../../services/hooks/useAppSelector";

const Navigation: FC = () => {
  const boards = useAppSelector(state => state.boards.data);

  return (
    <nav>
      <h2 className={styles.title}>All boards ({boards.length})</h2>
      <ul className={styles.list}>
        {
          boards.length > 0 && (
            <>
              {
                boards.map((board: any) => (
                  <NavigationLink path={board.slug} text={board.title}/>
                ))
              }
            </>
          )
        }
        <button className={styles.addButton}>
          <BoardIcon color={'#635FC7'}/>
          <span>+ Create New Board</span>
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
