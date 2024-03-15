import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, ButtonGroup } from '@mui/material';
import { switchComponents } from '../redux/slices/sliceFillDetails';
import { colors } from '../utils/colors.js'
import { scrollToTop } from '../utils/controls';


function FillDetailButton() {
    const dispatch = useDispatch();
    const fillDetails = useSelector(state => state.fillDetails);
    const value = fillDetails.value

    const handleButtonClick = (index) => {
        dispatch(switchComponents(index + 1));
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
                        bgcolor: colors.gray950,
                    }}
                >
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            variant={value === index + 1 ? 'contained' : 'outlined'}
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