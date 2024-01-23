import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box, Typography, Divider } from '@mui/material'
import { GitHub, LiveTv } from '@mui/icons-material'

function Projects() {
  const projects = useSelector(state => state.projects);

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
        }}>Projects</Typography>
        <Divider sx={{ backgroundColor: ' #1d4ed8', height: 1.5 }} />

        {
          projects.map((item, index) => {
            return (
              <Box key={index} marginBottom={'0.5rem'}>
                <Box sx={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '0.5rem'
                }}>
                  <Typography sx={{
                    color: '#000000',
                    fontWeight: 'bold'
                  }}>
                    {`0${index + 1}. `} {item.project_name}
                  </Typography>

                  <Typography> {item.tech_stack} </Typography>
                  <Link to={item.github_link} target='_blank'><GitHub /></Link>
                  <Link to={item.live_link} target='_blank'><LiveTv /></Link>
                </Box>
                <Typography>{item.description}</Typography>

              </Box>

            )
          })
        }

      </Box>
    </div>
  )
}

export default Projects