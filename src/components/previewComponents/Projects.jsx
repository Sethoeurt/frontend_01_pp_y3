import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Divider } from '@mui/material'
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
        <Box>
          <Box sx={{
            display: 'flex',
            gap: '1rem',
            marginTop: '0.5rem'
          }}>
            <Typography sx={{
              color: '#000000',
              fontWeight: 'bold'
            }}>{projects.project_name} </Typography>
            <Typography> {projects.tech_stack} </Typography>

          </Box>
          <Typography> Github - {projects.github_link}</Typography>
          <Typography> Live - {projects.live_link} </Typography>
          <Typography>{projects.description}</Typography>
        </Box>
      </Box>
    </div>



  )
}

export default Projects