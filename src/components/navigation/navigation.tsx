import styles from "./navigation.module.css";
import BoardIcon from "../board-icon/board-icon";
import NavigationLink from "../navigation-link/navigation-link";
import {FC} from "react";

const Navigation: FC = () => {
  return (
    <nav>
      <h2 className={styles.title}>All boards (3)</h2>
      <ul className={styles.list}>
        <NavigationLink path={'/'} text={'Platform Launch'}/>
        <NavigationLink path={'/1'} text={'Marketing Plan'}/>
        <NavigationLink path={'/2'} text={'Roadmap'}/>
        <button className={styles.addButton}>
          <BoardIcon color={'#635FC7'}/>
          <span>+ Create New Board</span>
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
