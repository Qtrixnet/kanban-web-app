import styles from './add-column-button.module.css';
import {FC} from "react";

const AddColumnButton: FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>+ New Column</button>
    </div>
  );
};

export default AddColumnButton;
