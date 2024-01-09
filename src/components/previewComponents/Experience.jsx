import React from 'react'
import { useSelector } from 'react-redux'

export default function Experience() {
  const experience = useSelector (state => state.experience)
  return (
    <div>
      <p> {experience.job_title} </p>
      <p> {experience.organization_name} </p>
      <p> {experience.start_year} </p>
      <p> {experience.end_year} </p>

    </div>
  )
}
