import React from 'react'
import { useSelector } from 'react-redux'

function Bio() {
  const bio = useSelector( state => state.bio);

  return (
    <div>
      <img src={bio.profile_image} alt="" />
      <p> {bio.first_name}</p>
      <p> {bio.last_name} </p>
      <p> {bio.role} </p>
      <p> {bio.description} </p>
    </div>
  )
}

export default Bio