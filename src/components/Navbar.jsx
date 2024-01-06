import React from 'react'
import resume_builder from '../assets/resume_builder.jpg'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div>
          <div className={styles.logoWrapper}>
            <img
              className={styles.logoImg}
              src={resume_builder}
              alt="logo"
            />
            <div className={styles.logo}>
              Resume Builder
            </div>
          </div>
        </div>

        <div className={styles.nav}>
          <div className={styles.navLink}>Home</div>
          <div className={styles.navLink}>My Resume </div>
          <div className={styles.navLink}>About </div>
        </div>

      </div>

    </>
  )
}

export default Navbar