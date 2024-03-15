import React from 'react'
import { NavLink } from 'react-router-dom'
import resume_builder from '../../assets/resume_builder.jpg'
import { Box } from '@mui/system'
import { Divider } from '@mui/material'
import { colors } from '../../utils/colors.js'
import styles from '../../styles/navbar.module.css'


function NavbarMobileDrawer({ handleDrawerToggle }) {
    return (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1rem',
                textAlign: "center",
                backgroundColor: colors.gray950
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
                <NavLink to={"/about"} className={styles.navEachLink}>About </NavLink>
            </Box>
        </Box>

    )
}

export default NavbarMobileDrawer