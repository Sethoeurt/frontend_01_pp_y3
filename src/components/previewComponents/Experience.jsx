import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Divider } from '@mui/material'


export default function Experience() {
  const experience = useSelector(state => state.experience)

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
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>Experience</Typography>
        <Divider sx={{ backgroundColor: ' #1d4ed8', height: 1.5 }} />
        <Box sx={{
          display: 'flex',
          gap: '1rem',
          marginTop: '0.5rem'
        }}>
          <Typography sx={{
            color: '#000000',
            fontWeight: 'bold'
          }}>{experience.job_title} </Typography>
          <Typography> {experience.organization_name} </Typography>
          <Typography>{experience.start_year} - {experience.end_year}</Typography>
        </Box>
      </Box>
    </div>

  )
}
