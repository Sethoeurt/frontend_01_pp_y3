import React from 'react'
import Styles from '../../styles/input.module.css'
import { Details } from '../../data/details'

function Experience() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}> Experience  </div>
          <div className={Styles.inputForm}>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="job_title"
                className={Styles.labelStyle}>
                Job Title 
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='job_title'
                placeholder={Details.experience[0].job_title}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="organization_name"
                className={Styles.labelStyle}>
                Organization Name 
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='organization_name'
                placeholder={Details.experience[0].organization_name}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="start_year"
                className={Styles.labelStyle}>
                Start Year 
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='start_year'
                placeholder={Details.experience[0].start_year}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="end_year"
                className={Styles.labelStyle}>
                End Year 
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='end_year'
                placeholder={Details.experience[0].end_year}
              />
            </div>

            <button className={Styles.button}>Next </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience