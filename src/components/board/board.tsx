import styles from './board.module.css';
import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {useAppSelector} from "../../services/hooks/useAppSelector";
import Column from "../column/column";
import AddColumnButton from "../add-column-button/add-column-button";

const Board = () => {
  const {id} = useParams();
  const boards = useAppSelector(state => state.boards.data);
  const [currentBoard, setCurrentBoard] = useState(null);

  const findCurrentBoard = useCallback(() => boards.find((board: any) => board.id === id), [id]);

  useEffect(() => {
    console.log(findCurrentBoard())
    setCurrentBoard(findCurrentBoard())
  }, [id])

  return (
    <div className={styles.board}>
      {
        // @ts-ignore
        currentBoard?.columns && currentBoard.columns.map(board => (<Column
          key={board.id}
          title={board.title}
          tasks={board.tasks}
          color={board.color}
        />))
      }
      <AddColumnButton />
    </div>
  );
};

export default Board;
