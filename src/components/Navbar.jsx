import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import resume_builder from '../assets/resume_builder.jpg'
import { Box, Drawer, Divider, AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import styles from '../styles/navbar.module.css'


function Navbar() {
  const drawerWidth = 240;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerToggle, setDrawerToggle] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerToggle(previousState => !previousState);
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        textAlign: "center",
        backgroundColor: '#030712'
      }}>
      <NavLink to={'/'} className={styles.logoWrapper}>
        <img className={styles.logoImg} src={resume_builder} alt="logo" />
        <div className={styles.logo}>Resume Builder</div>
      </NavLink>
      <Divider sx={{ backgroundColor: ' #f59e0b' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',

        }}
      >
        <NavLink to={"/"} className={styles.navEachLink} > Resume Template </NavLink>
        <NavLink to={"/myresume"} className={styles.navEachLink}>My Resume </NavLink>
        <NavLink to={"about"} className={styles.navEachLink}>About </NavLink>
      </Box>
    </Box>
  );

  return (
    <>
      {
        isMobile ? (
          <AppBar
            sx={{
              position: "sticky",
              top: 0,
              bgcolor: "#000000",
              zIndex : '10',
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  mr: 2,
                  color: '#65a30d',
                  '&:hover': {
                    color: '#a3e635',
                  },
                }}
                onClick={() => handleDrawerToggle()}
              >
                < MenuIcon />
              </IconButton>
              <NavLink to={'/'} className={styles.logoWrapper}>
                <div className={styles.logo}>Resume Builder</div>
              </NavLink>
            </Toolbar>
          </AppBar >
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
              <NavLink to={"/"} className={styles.navEachLink} > Resume Template </NavLink>
              <NavLink to={"/myresume"} className={styles.navEachLink}>My Resume </NavLink>
              <NavLink to={"about"} className={styles.navEachLink}>About </NavLink>
            </div>
          </div>
        )
      }

      <Box>
        <Drawer
          variant="temporary"
          open={drawerToggle}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {
              xs: "block",
              sm: "none"
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: '#030712',
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default Navbar