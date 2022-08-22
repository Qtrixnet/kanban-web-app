import styles from './column.module.css';
import {FC} from "react";
import Task from "../task/task";

interface IColumn {
  title: string,
  tasks: any,
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
              tasks.map((task: any) => <Task key={task.id} title={task.title} subtasks={task.subtasks} />)
            }
          </ul>
        )
      }
    </div>
  );
};

export default Column;
