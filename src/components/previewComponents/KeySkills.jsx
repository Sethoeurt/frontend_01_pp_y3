import React from 'react'
import { useSelector } from 'react-redux'

function KeySkills() {
  const keySkills = useSelector((state) => state.keySkills);

  return (
    <div>KeySkills
      <h1> {keySkills.firstKey}</h1>
      <h1> {keySkills.secondKey} </h1>
    </div>
  )
}

export default KeySkills