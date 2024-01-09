import React from 'react'
import Styles from '../../styles/input.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Details } from '../../data/details.js'
import { scrollToTop } from '../../utils/controls.js'
import { nextComponents } from '../../redux/slices/sliceFillDetails.js'
import {
  setProfileImage, setFirstName, setLastName, setRole, setDescription
} from '../../redux/slices/bioSlice.js'


function Bio() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bio = useSelector( (state) => state.bio);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(nextComponents(1));
    scrollToTop()
  }

  const goToPreviousComponents = () => {
    navigate('/');
    scrollToTop();
  }

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}>Bio </div>
          <form
            className={Styles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >

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
                // value={bio.profile_image}
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
                value={bio.first_name}
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
                value={bio.last_name}
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
                value={bio.role}
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
                value={bio.description}
                onChange={(e) => dispatch(setDescription(e.target.value))}
              ></textarea>
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

export default Bio