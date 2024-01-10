import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Divider, Typography } from '@mui/material'


function Address() {
  const address = useSelector((state) => state.address);
  return (
    <>
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
          }}>
            Address
          </Typography>
          <Divider sx={{ backgroundColor: ' #1d4ed8', height: 1.5 }} />
          <Box sx={{
            display: 'flex',
            gap: '1rem',
            marginTop: '0.5rem'
          }}>
            <Typography >{address.postal_code} </Typography>
            <Typography> {address.city}  </Typography>
            <Typography>{address.state}  </Typography>
            <Typography> {address.country} </Typography>

          </Box>
          <Typography sx={{
            display: 'flex',
            gap: '1rem',
            flexDirection: 'row',
            flexWrap: 'nowrap'
          }}>
            <Typography> {address.phone}</Typography>
            <Typography> {address.email} </Typography>
          </Typography>
        </Box>
      </div >
    </>
  )
}

export default Address