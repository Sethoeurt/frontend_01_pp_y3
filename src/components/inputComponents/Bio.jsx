import React from 'react'
import { Details } from '../../data/details.js'
import Styles from '../../styles/input.module.css'

import { useDispatch } from 'react-redux'
import {
  setProfileImage,
  setFirstName,
  setLastName,
  setRole,
  setDescription
} from '../../redux/slices/bioSlice.js'


function Bio() {
  const dispatch = useDispatch();

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}>Bio </div>
          <div className={Styles.inputForm}>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="profileImage"
                className={Styles.labelStyle}>
                Profile Image
              </label>
              <input
                className={Styles.inputStyle}
                type="file"
                accept="image/*"
                id='profileImage'
                placeholder={"Upload Profile Image"}
                onChange={(e) => dispatch(setProfileImage(e.target.value))}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="first_name"
                className={Styles.labelStyle}>
                First Name
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='first_name'
                placeholder={Details.bio.first_name}
                onChange={(e) => dispatch(setFirstName(e.target.value))}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="last_name"
                className={Styles.labelStyle}>
                Last Name
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='last_name'
                placeholder={Details.bio.last_name}
                onChange={(e) => dispatch(setLastName(e.target.value))}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="role"
                className={Styles.labelStyle}>
                Role
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='role'
                placeholder={Details.bio.role}
                onChange={(e) => dispatch(setRole(e.target.value))}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="description"
                className={Styles.labelStyle}>
                Description
              </label>
              <textarea
                rows="5"
                className={Styles.inputAreaStyle}
                type='tel'
                id='description'
                placeholder={Details.bio.description}
                onChange={(e) => dispatch(setDescription(e.target.value))}
              ></textarea>
            </div>

            <button className={Styles.button}>Next </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bio