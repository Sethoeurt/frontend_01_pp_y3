import React from 'react'
import Styles from '../../styles/input.module.css'
import { Details } from '../../data/details'

function Projects() {
  return (
    <>
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.title}> Projects  </div>
        <div className={Styles.inputForm}>

          <div className={Styles.labelInputWrapper}>
            <label
              htmlFor="project_name"
              className={Styles.labelStyle}>
              Project Name 
            </label>
            <input
              className={Styles.inputStyle}
              type="text"
              id='project_name'
              placeholder={Details.projects[0].project_name}
            />
          </div>

          <div className={Styles.labelInputWrapper}>
            <label
              htmlFor="tech_stack"
              className={Styles.labelStyle}>
              Tech Stack 
            </label>
            <input
              className={Styles.inputStyle}
              type="text"
              id='tech_stack'
              placeholder={Details.projects[0].tech_stack}
            />
          </div>

          <div className={Styles.labelInputWrapper}>
            <label
              htmlFor="github_link"
              className={Styles.labelStyle}>
              Github Link 
            </label>
            <input
              className={Styles.inputStyle}
              type="text"
              id='github_link'
              placeholder={Details.projects[0].github_link}
            />
          </div>

          <div className={Styles.labelInputWrapper}>
            <label
              htmlFor="live_link"
              className={Styles.labelStyle}>
              Live Link 
            </label>
            <input
              className={Styles.inputStyle}
              type="text"
              id='live_link'
              placeholder={Details.projects[0].live_link}
            />
          </div>

          <div className={Styles.labelInputWrapper}>
            <label
              htmlFor="description"
              className={Styles.labelStyle}>
              Description 
            </label>
            <input
              className={Styles.inputStyle}
              type="text"
              id='description'
              placeholder={Details.projects[0].description}
            />
          </div>

          <button className={Styles.button}>Next </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Projects