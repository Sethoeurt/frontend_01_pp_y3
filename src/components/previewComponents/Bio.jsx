import React from 'react';
import anuragaffection from '../../assets/anuragaffection.jpg'
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';


function Bio() {
  const bio = useSelector(state => state.bio);

  return (
    <div>
      <Box sx={{
        p: '1rem',
        backgroundColor: '#f3f4f6',
        color: '#111827',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <img
            width="60px"
            height="60px"
            src={anuragaffection}
            alt="image"
            style={{ borderRadius: '50%' }}
          />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem'
          }}>
            <Box sx={{ display: 'flex', gap: '0.5rem', }}>
              <Typography sx={{ typography: 'h1', fontWeight: 'bold', fontSize: '1.5rem', color: '#1d4ed8' }}>
                {bio.firstName}
              </Typography>
              <Typography sx={{ typography: 'h1', fontWeight: 'bold', fontSize: '1.5rem', color: '#1d4ed8' }}>
                {bio.lastName}
              </Typography>
            </Box>
            <Typography sx={{ typography: 'h2', fontWeight: 'bold', fontSize: '1rem', color: '#000000' }} >{bio.role}</Typography>
          </Box>
        </Box>
        <Typography sx={{}}>{bio.description}</Typography>
      </Box>
    </div>
  );
}

export default Bio;
