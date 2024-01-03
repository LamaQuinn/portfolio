import React from "react";
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header=()=> {
  return (
 <header>
  <h1 className={styles.name_tag}>Laman Ismayilova</h1>
  <nav>
   <NavLink to="/" className={styles.btn}>
    About
   </NavLink>
   <NavLink to="/skills" className={styles.btn}>
    Skills
   </NavLink>
   <NavLink to="/projects" className={styles.btn} id={styles.proj}>
    Projects
   </NavLink>
  </nav>
 </header>
  )
}

export default Header