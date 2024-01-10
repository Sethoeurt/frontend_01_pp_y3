import React from 'react'
import { NavLink } from 'react-router-dom'
import resume_builder from '../assets/resume_builder.jpg'
import styles from '../styles/navbar.module.css'
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {
        isMobile ? (
          <AppBar sx={{
            position: "sticky",
            top: 0,
            bgcolor: "#000000"
          }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <NavLink to={'/'} className={styles.logoWrapper}>
                <img className={styles.logoImg} src={resume_builder} alt="logo" />
                <div className={styles.logo}>Resume Builder</div>
              </NavLink>
            </Toolbar>

          </AppBar>
        ) : (
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
        )
      }


    </>
  )
}

export default Navbar