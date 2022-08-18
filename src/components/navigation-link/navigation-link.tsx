import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from "./navigation-link.module.css";
import BoardIcon from "../board-icon/board-icon";

interface INavigationLink {
  path: string,
  text: string,
}

const NavigationLink: FC<INavigationLink> = ({path, text}) => {
  return (
    <NavLink to={path} className={styles.link}>
      {({isActive}) => (
        <li className={isActive ? `${styles.listItemActive} ${styles.listItem}` : styles.listItem}>
          <BoardIcon color={isActive ? '#FFFFFF' : '#828FA3'}/>
          <span>{text}</span>
        </li>
      )}
    </NavLink>
  );
};

export default NavigationLink;
