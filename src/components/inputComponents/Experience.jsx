import React from 'react'
import Styles from '../../styles/input.module.css'
import { useDispatch } from 'react-redux'
import { Details } from '../../data/details'
import {scrollToTop} from '../../utils/controls.js'

import {
  setJobTitle, setOrganizationName, setStartYear, setEndYear
} from '../../redux/slices/experienceSlice.js'

import {
  previousComponents, nextComponents
} from '../../redux/slices/sliceFillDetails.js'

function Experience() {

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextComponents(1));
    scrollToTop()
  }

  const goToPreviousComponents = () => {
    dispatch(previousComponents(1));
    scrollToTop();
  }

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}> Experience </div>
          <form
            className={Styles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >

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
                onChange={(e) => dispatch(setJobTitle(e.target.value))}
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
                onChange={(e) => dispatch(setOrganizationName(e.target.value))}
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
                onChange={(e) => dispatch(setStartYear(e.target.value))}
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
                onChange={(e) => dispatch(setEndYear(e.target.value))}
              />
            </div>

            <div className={Styles.buttonWrapper}>
              <div
                className={Styles.button}
                onClick={() => goToPreviousComponents()}
              >
                <p>Back</p>
              </div>
              <button type='submit' className={Styles.button}>Next </button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Experience