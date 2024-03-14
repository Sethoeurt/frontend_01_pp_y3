import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

function Address() {
  const address = useSelector((state) => state.address);
  const dynamicStyle = useSelector((state) => state.dynamicStyle);

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: dynamicStyle.backgroundColor,
        color: dynamicStyle.color,
        p: '1rem'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',

        }}>
          <Typography >{address.postal_code} {','} {address.city} </Typography>
          <Typography>{address.state} {','} {address.country}</Typography>
          <Typography> {address.phone}</Typography>
          <Typography> {address.email} </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Address