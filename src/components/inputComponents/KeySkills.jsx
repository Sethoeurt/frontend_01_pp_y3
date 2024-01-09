import React from 'react'
import Styles from '../../styles/input.module.css'
import { useDispatch } from 'react-redux'
import { Details } from '../../data/details'
import { scrollToTop } from '../../utils/controls.js'
import { previousComponents, nextComponents } from '../../redux/slices/sliceFillDetails.js'

function KeySkills() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(nextComponents(1));
    scrollToTop();

  }

  const goToPreviousComponents = () => {
    dispatch(previousComponents(1));
    scrollToTop();
  }

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}> Key Skills  </div>
          <form
            className={Styles.inputForm}
            onSubmit={ (e) => handleSubmit(e)}
          >
            <input
              className={Styles.inputStyle}
              type="text"
              placeholder={Details.key_skills[0]}
            />

            <input
              className={Styles.inputStyle}
              type="text"
              placeholder={Details.key_skills[1]}
            />

            <input
              className={Styles.inputStyle}
              type="text"
              placeholder={Details.key_skills[2]}
            />

            <input
              className={Styles.inputStyle}
              type="text"
              placeholder={Details.key_skills[3]}
            />

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

export default KeySkills