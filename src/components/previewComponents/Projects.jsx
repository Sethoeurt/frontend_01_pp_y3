import React from 'react'
import { useSelector } from 'react-redux'

function Projects() {
  const projects = useSelector(state => state.projects);

  return (
    <div>
      <h1> {projects.project_name} </h1>
      <h1> {projects.tech_stack} </h1>
      <h1> {projects.github_link} </h1>
      <h1> {projects.live_link} </h1>
      <h1> {projects.description} </h1>
    </div>
  )
}

export default Projects