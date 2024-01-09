import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Divider } from '@mui/material'

function Education() {
  const education = useSelector(state => state.education);
  return (
    <div>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f3f4f6',
        color: '#111827',
        p: '1rem'
      }}>
        <Typography sx={{
          color: '#1d4ed8',
          fontSize: '1.25rem',
          fontWeight : 'bold'
        }}>Education</Typography>
        <Divider sx={{ backgroundColor: ' #1d4ed8', height: 1.5 }} />
        <Box sx={{

        }}>
          <Typography>{education.degree}</Typography>
          <Typography> in {education.domain}</Typography>
          <Typography>{education.university}</Typography>
          <Typography>{education.start_year} - {education.end_year}</Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Education