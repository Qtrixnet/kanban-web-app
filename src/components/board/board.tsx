import styles from './board.module.css';
import {useParams} from "react-router-dom";
import {FC, useCallback, useEffect, useState} from "react";
import {useAppSelector} from "../../services/hooks/useAppSelector";
import Column from "../column/column";
import AddColumnButton from "../add-column-button/add-column-button";
import {IBoard} from "../../services/types/types";

const Board: FC = () => {
  const {id} = useParams();
  const boards = useAppSelector(state => state.boards.data);
  const [currentBoard, setCurrentBoard] = useState<IBoard | null>(null);

  const findCurrentBoard = useCallback(() => boards.find((board: IBoard) => board.id === id), [id]);

  useEffect(() => {
    console.log(currentBoard)
    setCurrentBoard(findCurrentBoard())
  }, [id])

  return (
    <div className={styles.board}>
      {
        currentBoard && currentBoard.columns.map(board => (
          <Column
            key={board.id}
            title={board.title}
            tasks={board.tasks}
            color={board.color}
          />
        ))
      }
      <AddColumnButton/>
    </div>
  );
};

export default Board;
