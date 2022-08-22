import styles from './add-column-button.module.css';

const AddColumnButton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>+ New Column</button>
    </div>
  );
};

export default AddColumnButton;
