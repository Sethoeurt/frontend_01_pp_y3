import React from 'react'
import { Box,Button, ButtonGroup } from '@mui/material';

function FillDetailButton() {
    const buttons = [
        <Button key="bio">Bio</Button>,
        <Button key="address">Address</Button>,
        <Button key="experience">Experience</Button>,
        <Button key="projects">Projects</Button>,
        <Button key="education">Education</Button>,
        <Button key="keySkills">Key Skills</Button>,
        <Button key="donwload">Download</Button>
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
                    {buttons}
                </ButtonGroup>
            </Box>
        </>
    )
}

export default FillDetailButton