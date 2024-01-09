import React from 'react'
import Address from '../components/previewComponents/Address'
import Bio from '../components/previewComponents/Bio'
import Education from '../components/previewComponents/Education'
import Experience from '../components/previewComponents/Experience'
import KeySkills from '../components/previewComponents/KeySkills'
import Projects from '../components/previewComponents/Projects'
import { Box } from '@mui/material'

function Download() {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent : 'space-around',
                alignItems : 'center',
                backgroundColor : '#f3f4f6',
            }}>
                <Bio />
                <Address />
            </Box>

            <Experience />
            <Projects />
            <Education />
            <KeySkills />
        </div>
    )
}

export default Download