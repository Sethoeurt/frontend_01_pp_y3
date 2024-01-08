import React from 'react'
import Styles from '../../styles/input.module.css'
import { Details } from '../../data/details'

function Education() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}> Education   </div>
          <div className={Styles.inputForm}>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="degree"
                className={Styles.labelStyle}>
                Degree 
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='degree'
                placeholder={Details.education[0].degree}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="domain"
                className={Styles.labelStyle}>
                Domain 
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='domain'
                placeholder={Details.education[0].domain}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="university"
                className={Styles.labelStyle}>
                University  
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='univesity'
                placeholder={Details.education[0].university}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="start_year "
                className={Styles.labelStyle}>
                Start Year 
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='start_year'
                placeholder={Details.education[0].start_year}
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
                placeholder={Details.education[0].end_year}
              />
            </div>

            <button className={Styles.button}>Next </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education