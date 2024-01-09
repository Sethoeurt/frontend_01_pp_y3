import React from 'react'
import Styles from '../../styles/input.module.css'
import { Details } from '../../data/details'
import { useDispatch } from 'react-redux'
import {
  setDegree, 
  setDomain, 
  setUniversity, 
  setStartYear, 
  setEndYear
} from "../../redux/slices/educationSlice.js"

function Education() {
  const dispatch = useDispatch();

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
                onChange={ (e) => dispatch(setDegree(e.target.value))}
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
                onChange={ (e) => dispatch(setDomain(e.target.value))}
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
                onChange={ (e) => dispatch(setUniversity(e.target.value))}
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
                onChange={ (e) => dispatch(setStartYear(e.target.value))}
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
                onChange={ (e) => dispatch(setEndYear(e.target.value))}
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