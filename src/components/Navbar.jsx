import React from 'react'
import { NavLink } from 'react-router-dom'
import resume_builder from '../assets/resume_builder.jpg'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>

        <NavLink to={'/'} className={styles.logoWrapper}>
          <img
            className={styles.logoImg}
            src={resume_builder}
            alt="logo"
          />
          <div className={styles.logo}>Resume Builder</div>
        </NavLink>

        <div className={styles.navLinksGroup}>
          <NavLink to={"/"} className={styles.navEachLink} >Home </NavLink>
          <NavLink to={"/myresume"} className={styles.navEachLink}>My Resume </NavLink>
          <NavLink to={"about"} className={styles.navEachLink}>About </NavLink>
        </div>

      </div>
    </>
  )
}

export default Navbar