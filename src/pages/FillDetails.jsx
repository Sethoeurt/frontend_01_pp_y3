import React from 'react'
import Bio from '../components/inputComponents/Bio'
import Address from '../components/inputComponents/Address'
import Experience from '../components/inputComponents/Experience'
import Project from '../components/inputComponents/Projects'
import Education from '../components/inputComponents/Education'
import KeySkills from '../components/inputComponents/KeySkills'

function FillDetails() {
  return (
    <div>FillDetails
      <Bio/>
      <Address/>
      <Experience/>
      <Project/>
      <Education/>
      <KeySkills/>
    </div>
  )
}

export default FillDetails