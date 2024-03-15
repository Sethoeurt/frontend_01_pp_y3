// from installed dependencies 
import React, { useState } from 'react'
import { Drawer, useMediaQuery, useTheme } from '@mui/material';

// from AppNavBar Components 
import NavbarDesktop from './NavbarDesktop.jsx';
import NavbarMobile from './NavbarMobile.jsx';
import NavbarMobileDrawer from './NavbarMobileDrawer.jsx';

import { colors } from '../../utils/colors.js'

function Navbar() {
  const drawerWidth = 240;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerToggle, setDrawerToggle] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerToggle(previousState => !previousState);
  }

  // custom styling of drawer 
  const drawerStyle = {
    display: {
      xs: "block",
      sm: "none"
    },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      backgroundColor: colors.gray950,
    },
  }

  return (
    <>
      {
        isMobile ? (
          <NavbarMobile handleDrawerToggle={handleDrawerToggle} />
        ) : (
          <NavbarDesktop />
        )
      }
      <Drawer
        variant="temporary"
        open={drawerToggle}
        onClose={handleDrawerToggle}
        sx={drawerStyle}
        ModalProps={{ keepMounted: true }}
      >
        <NavbarMobileDrawer handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </>
  )
}

export default Navbar

{/* // <Drawer> work when isMobile + NavbarMobile both are true */ }