import React from 'react'
import Download from '../components/Download.jsx'
import Styles from '../styles/home.module.css'

function MyResume() {
  return (
    <div className={Styles.container}>
      <div className={Styles.headingWrapper}>
        <div className={Styles.heading}> My Resume </div>
        <div> Edit or Export Your Resume as PDF </div>
      </div>

      <div>
        <Download />
      </div>
    </div>
  )
}

export default MyResume