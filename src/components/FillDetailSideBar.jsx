import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material'
import { Box } from '@mui/system';
import { switchComponents } from '../redux/slices/sliceFillDetails.js'
import { scrollToTop } from '../utils/controls.js';

function FillDetailSideBar() {
    const dispatch = useDispatch();
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleButtonClick = (index) => {
        dispatch(switchComponents(index));
        handleClose();
        scrollToTop();
    }

    const buttons = [
        'Bio',
        'Address',
        'Experience',
        'Projects',
        'Education',
        'Key Skills',
        'Download'
    ];
    return (
        <>
            <Box >
                <IconButton
                    sx={{
                        marginTop: '2rem',
                        marginLeft: '0.5rem',
                        position: "sticky",
                        top: 70,
                        color: "#65a30d",
                        backgroundColor: "#030712",
                        '&:hover': {
                            color: '#a3e635',
                            backgroundColor: "#030712"
                        },
                    }}
                    aria-label='more'
                    aria-controls='long_menu'
                    aria-expanded='true'
                    aria-haspopup="true"
                    onClick={(e) => handleClick(e)}
                >
                    < MoreVertIcon />
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
                            width: '20ch',
                            maxHeight: ITEM_HEIGHT * 7.5,
                            backgroundColor: '#030712',
                        },
                    }}
                >
                    {buttons.map((button, index) => (
                        <MenuItem
                            key={index}
                            onClick={() => handleButtonClick(index)}
                        >
                            <Button>{button}</Button>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    )
}

export default FillDetailSideBar