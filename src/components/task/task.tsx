import styles from './task.module.css';
import {FC, useCallback, useEffect, useState} from "react";
import {ISubtask, ITask} from "../../services/types/types";

const Task: FC<ITask> = ({title, subtasks}) => {
  const [completedTasks, setCompletedTasks] = useState<ISubtask[]>([]);

  const foundCompletedTasks = useCallback(() => subtasks.filter((subtask: ISubtask) => subtask.done), [])

  useEffect(() => {
    setCompletedTasks(foundCompletedTasks())
  }, [])

  return (
    <li className={styles.task}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{completedTasks.length} of {subtasks.length} subtasks</p>
    </li>
  );
};

export default Task;
