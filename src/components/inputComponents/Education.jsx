import React from 'react'
import Styles from '../../styles/input.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Details } from '../../data/details'
import { scrollToTop } from '../../utils/controls.js'
import { setDegree, setDomain, setUniversity, setStartYear, setEndYear } from "../../redux/slices/educationSlice.js"
import { previousComponents, nextComponents } from '../../redux/slices/sliceFillDetails.js'


function Education() {
  const dispatch = useDispatch();
  const education = useSelector(state => state.education);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextComponents(1))
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
          <div className={Styles.title}> Education  </div>

          <form
            className={Styles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >
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
                value={education.degree}
                onChange={(e) => dispatch(setDegree(e.target.value))}
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
                value={education.domain}
                onChange={(e) => dispatch(setDomain(e.target.value))}
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
                value={education.university}
                onChange={(e) => dispatch(setUniversity(e.target.value))}
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
                value={education.start_year}
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
                placeholder={Details.education[0].end_year}
                value={education.end_year}
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

export default Education