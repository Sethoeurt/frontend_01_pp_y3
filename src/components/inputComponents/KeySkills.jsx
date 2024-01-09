import React from 'react'
import Styles from '../../styles/input.module.css'
import { Details } from '../../data/details'

function KeySkills() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}> Key Skills  </div>
          <div className={Styles.inputForm}>
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

            <button className={Styles.button}>Next </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeySkills