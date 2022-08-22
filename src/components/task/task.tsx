import styles from './task.module.css';
import {FC, useCallback, useEffect, useState} from "react";

interface ITask {
  title: string,
  subtasks: any,
}

const Task: FC<ITask> = ({title, subtasks}) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const foundCompletedTasks = useCallback(() => subtasks.filter((subtask: any) => subtask.done), [])

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
