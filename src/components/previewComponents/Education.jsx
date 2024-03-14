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
        // backgroundColor: 'brown',
        color: '#111827',
        p: '1rem'
      }}>
        <Typography sx={{
          color: '#1d4ed8',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>Education</Typography>
        <Divider sx={{ backgroundColor: ' #1d4ed8', height: 1.5 }} />
        {
          education?.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                gap: '1rem',
                marginTop: '0.5rem'
              }}
            >
              <Typography
                sx={{
                  color: '#000000',
                  fontWeight: 'bold'
                }}
              >
                {item.degree} - {item.domain}
              </Typography>
              <Typography>{item.university}</Typography>
              <Typography>{item.start_year} - {item.end_year}</Typography>
            </Box>
          ))
        }
      </Box>
    </div>
  )
}

export default Education