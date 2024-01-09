import React from 'react'
import { useSelector } from 'react-redux'

function Education() {
  const education = useSelector( state => state.education);
  return (

    <div>
      <p> {education.degree}</p>
      <p> {education.domain} </p>
      <p> {education.university} </p>
      <p> {education.start_year} </p>
      <p> {education.end_year} </p>
    </div>
  )
}

export default Education