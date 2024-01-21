import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Divider } from '@mui/material'

function KeySkills() {
  const keySkills = useSelector((state) => state.keySkills);

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
        }}>Key Skills</Typography>
        <Divider sx={{ backgroundColor: ' #1d4ed8', height: 1.5 }} />
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginTop: '0.5rem'
        }}>
          {
            keySkills.map((skill, index) => (
              <Typography
                sx={{ marginRight: '1rem' }}
                key={index}
              >
                {skill}
              </Typography>
            ))
          }
        </Box>
      </Box>

    </div>
  )
}

export default KeySkills