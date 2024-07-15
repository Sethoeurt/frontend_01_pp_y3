import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import AppsIcon from '@mui/icons-material/Apps';
import { Button, Tooltip } from '@mui/material'
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
            name: "Code Book",
            shortName: 'Code',
            image: resume_builder,
            link: 'https://github.com/anuragaffection/FullStackNotes'
        },
        {
            name: 'Anurag Affection',
            shortName: "Anurag",
            image: resume_builder,
            link: 'https://anuragaffection.vercel.app/'
        },
        {
            name: 'Entertainment App',
            shortName: 'Entertain...',
            image: resume_builder,
            link: 'https://entertainment-app-anurag-affection.vercel.app/'
        },


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
                            width: '32ch',
                            maxHeight: ITEM_HEIGHT * 6.5,
                            backgroundColor: colors.gray950,
                        },
                    }}

                >
                    <Box


                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)', // Two items per row
                            gap: '24px', // Spacing between items
                            padding: '16px', // Padding around the grid

                        }}
                    >

                        {items.map((item, index) => (
                            <MenuItem
                                key={index}
                                onClick={handleClose}
                                sx={{
                                    padding: 0,
                                    // Remove padding to ensure items align properly
                                }}
                            >
                                <a
                                    href={item.link}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        width: '100%'
                                    }}
                                >
                                    <Tooltip title={item.name} arrow placement='top'>
                                        <Button
                                            variant={'text'}
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                // justifyContent: 'flex-start'
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.shortName}
                                                style={{ width: '24px', height: '24px', marginRight: '8px' }}
                                            />
                                            {/* {item.name} */}
                                            <span
                                                style={{
                                                    maxWidth: '80px',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {item.name.length > 5 ? `${item.name.slice(0, 5)}...` : item.name}
                                            </span>

                                        </Button>
                                    </Tooltip>
                                </a>
                            </MenuItem>
                        ))}

                    </Box>
                </Menu>
            </Box>
        </>
    )
}

export default NavbarMenu
