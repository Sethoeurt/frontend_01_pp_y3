import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, IconButton } from '@mui/material'
import { colors } from '../../utils/colors';
import styles from '../../styles/navbar.module.css'

function NavbarMobile({ handleDrawerToggle }) {
    return (
        <AppBar
            sx={{
                position: "sticky",
                top: 0,
                bgcolor: "#000000",
                zIndex: '10',
                p: '0.5rem'
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
                        color: colors.cyan600,
                        '&:hover': {
                            color: colors.cyan500,
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
    )
}

export default NavbarMobile