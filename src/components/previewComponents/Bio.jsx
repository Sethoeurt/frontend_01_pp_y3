import React from 'react';
import resume_builder from '../../assets/resume_builder.jpg'
import { useSelector } from 'react-redux';
import { Box, Typography, } from '@mui/material';


function Bio() {
  const bio = useSelector(state => state.bio);
  const dynamicStyle = useSelector(state => state.dynamicStyle);
  const storedImage = localStorage.getItem('uploadedImage');

  return (
    <>
      <Box
        sx={{
          p: '1rem',
          backgroundColor: dynamicStyle.backgroundColor,
          color: dynamicStyle.color,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <Box
          sx={{ display: 'flex', gap: '1rem' }}
        >
          <img
            width="60px"
            height="60px"
            src={storedImage ? storedImage : resume_builder}
            alt="image"
            style={{ borderRadius: '50%' }}
          />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem'
          }}>
            <Box
              sx={{
                display: 'flex',
                gap: '0.5rem',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                color: dynamicStyle.titleColor,
              }}
            >
              <Typography
                sx={{
                  typography: 'h1',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                }}
              > {bio.firstName} </Typography>
              <Typography
                sx={{
                  typography: 'h1',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                }}
              > {bio.lastName}</Typography>
            </Box>

            <Typography
              sx={{
                typography: 'h2',
                fontWeight: 'bold',
                fontSize: '1rem',
                color: '#000000'
              }}
            >{bio.role} </Typography>
          </Box>
        </Box>
        <Typography>{bio.description}</Typography>
      </Box>
    </>
  );
}

export default Bio;
