import styles from './empty-board.module.css';
import Button from "../button/button";
import {FC} from "react";

const EmptyBoard: FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>This board is empty. Create a new column to get started.</h3>
      <Button>+ Add New Column</Button>
    </div>
  );
};

export default EmptyBoard;
