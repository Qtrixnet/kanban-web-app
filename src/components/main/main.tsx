import styles from './main.module.css';
import Header from "../header/header";
import EmptyBoard from "../empty-board/empty-board";

const Main = () => {
  return (
    <main className={styles.container}>
      <Header />
      <EmptyBoard />
    </main>
  );
};

export default Main;
