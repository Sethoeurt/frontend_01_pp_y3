import React from 'react'
import Address from '../components/previewComponents/Address'
import Bio from '../components/previewComponents/Bio'
import Education from '../components/previewComponents/Education'
import Experience  from '../components/previewComponents/Experience'
import KeySkills from '../components/previewComponents/KeySkills'
import Projects from '../components/previewComponents/Projects'


function MyResume() {
  return (
    <div>MyResume
      <Bio/>
      <Address/>
      <Experience/>
      <Projects/>
      <Education/>
      <KeySkills/>
    </div>
  )
}

export default MyResume