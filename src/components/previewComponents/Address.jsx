import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Typography } from '@mui/material'

function Address() {
  const address = useSelector((state) => state.address);
  return (
    <>
      <div>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f3f4f6',
          color: '#1d4ed8',
          gap: '0.25rem',
          p: '1rem'
        }}>
          <Typography> {address.postal_code}</Typography>
          <Typography>{address.city}, {address.state}, {address.country} </Typography>
          <Typography>{address.phone}</Typography>
          <Typography>{address.email}</Typography>
        </Container>
      </div>
    </>
  )
}

export default Address