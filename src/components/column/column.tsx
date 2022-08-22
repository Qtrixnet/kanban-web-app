import styles from './column.module.css';
import {FC} from "react";
import Task from "../task/task";
import {ITask} from "../../services/types/types";

interface IColumn {
  title: string,
  tasks: ITask[],
  color: string,
}

const Column: FC<IColumn> = ({title, tasks, color}) => {
  return (
    <div className={styles.column}>
      <h3 className={styles.title}>
        <span style={{backgroundColor: color}} className={styles.circle}/>
        {title} ({tasks.length})
      </h3>
      {
        tasks.length > 0 && (
          <ul className={styles.list}>
            {
              tasks.map((task: ITask) => <Task key={task.id} title={task.title} subtasks={task.subtasks}/>)
            }
          </ul>
        )
      }
    </div>
  );
};

export default Column;
