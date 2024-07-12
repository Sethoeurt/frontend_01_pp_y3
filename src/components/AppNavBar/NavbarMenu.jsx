import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import AppsIcon from '@mui/icons-material/Apps';
import { Button } from '@mui/material'
import { Box } from '@mui/system';
import { colors } from '../../utils/colors.js'
import resume_builder from '../../assets/resume_builder.jpg'

function NavbarMenu() {
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const items = [
        {
            name: 'Code Book',
            image: resume_builder,
            link: 'https://github.com/anuragaffection/FullStackNotes'
        },
        {
            name: 'Anurag Affection',
            image: resume_builder,
            link: 'https://anuragaffection.vercel.app/'
        },
        {
            name: 'Entertainment App',
            image: resume_builder,
            link: 'https://entertainment-app-anurag-affection.vercel.app/'
        }
    ];

    return (
        <>
            <Box
                sx={{
                    marginLeft: "32px"
                }}>
                <IconButton
                    sx={{
                        marginLeft: '0.5rem',
                        position: "sticky",
                        top: 80,
                        color: colors.cyan600,
                        backgroundColor: colors.gray950,
                        '&:hover': {
                            color: colors.cyan500,
                            backgroundColor: colors.gray950
                        },
                    }}
                    aria-label='more'
                    aria-controls='long_menu'
                    aria-expanded='true'
                    aria-haspopup="true"
                    onClick={(e) => handleClick(e)}
                >
                    <AppsIcon sx={{ fontSize: '36px' }} />
                </IconButton>
                <Menu
                    id='long_menu'
                    anchorEl={anchorEl}
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            width: '30ch',
                            maxHeight: ITEM_HEIGHT * 7.5,
                            backgroundColor: colors.gray950,
                        },
                    }}
                >
                    {items.map((item, index) => (
                        <MenuItem
                            key={index}
                            onClick={handleClose}
                        >
                            <a href={item.link} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                                <Button
                                    variant={'text'}
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start'
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{ width: '24px', height: '24px', marginRight: '8px' }}
                                    />
                                    {item.name}
                                </Button>
                            </a>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    )
}

export default NavbarMenu
