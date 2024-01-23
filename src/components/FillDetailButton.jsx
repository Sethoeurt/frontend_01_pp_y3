import React from 'react'
import { useDispatch } from 'react-redux';
import { Box, Button, ButtonGroup } from '@mui/material';
import { switchComponents } from '../redux/slices/sliceFillDetails';
import { scrollToTop } from '../utils/controls';


function FillDetailButton() {
    const dispatch = useDispatch();

    const handleButtonClick = (index) => {
        dispatch(switchComponents(index));
        scrollToTop()
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
            <Box
                sx={{
                    marginTop: '3rem',
                    marginLeft: '3rem',
                }}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                    sx={{
                        position: "sticky",
                        top: 90,
                        bgcolor: "#030712",
                    }}
                >
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                        >
                            {button}
                        </Button>
                    ))
                    }
                </ButtonGroup>
            </Box>
        </>
    )
}

export default FillDetailButton