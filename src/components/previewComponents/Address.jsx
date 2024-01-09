import React from 'react'
import { useSelector } from 'react-redux'

function Address() {
  const address = useSelector((state) => state.address);
  return (
    <>
      <p> {address.postal_code}</p>
      <p> {address.city}, {address.state}, {address.country} </p>
      <p> {address.phone} </p>
      <p> {address.email} </p>
    </>
  )
}

export default Address