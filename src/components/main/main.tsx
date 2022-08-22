import styles from './main.module.css';
import Header from "../header/header";
import {Route, Routes} from "react-router-dom";
import Board from "../board/board";
import EmptyBoard from "../empty-board/empty-board";

const Main = () => {
  return (
    <main className={styles.container}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header/>
              <EmptyBoard/>
            </>}
        />
        <Route
          path=":id"
          element={
            <>
              <Header/>
              <Board/>
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
