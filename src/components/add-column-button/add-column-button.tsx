import styles from './add-column-button.module.css';
import {FC} from "react";

const AddColumnButton: FC = () => {
  return (
    <button className={styles.button}>+ New Column</button>
  );
};

export default AddColumnButton;
