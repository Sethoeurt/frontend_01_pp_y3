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
                flexDirection: 'column',
                backgroundColor : '#f3f4f6',
            }}>
                <Bio />
                <Experience/>
                <Projects/>
                <Education/>
                <KeySkills />
                <Address />
            </Box>

        </div>
    )
}

export default Download