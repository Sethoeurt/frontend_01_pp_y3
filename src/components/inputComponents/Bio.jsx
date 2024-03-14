import React, { useState } from 'react'
import Styles from '../../styles/input.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Details } from '../../data/details.js'
import { scrollToTop } from '../../utils/controls.js'
import { nextComponents } from '../../redux/slices/sliceFillDetails.js'
import { modifyBio } from '../../redux/slices/bioSlice.js'


function Bio() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bioInitialState = useSelector((state) => state.bio);

  const [bio, setBio] = useState(() => {
    const storedBio = localStorage.getItem("storeBio");
    return storedBio ? JSON.parse(storedBio) : bioInitialState;
  })

  const handleNext = (data) => {
    setBio((prevState) => {
      return { ...prevState, ...data }
    })
    dispatch(modifyBio({ ...bio, ...data }))
    dispatch(nextComponents(1));
    scrollToTop();
    localStorage.setItem("storeBio", JSON.stringify({ ...bio, ...data }))
  }

  const handlePrevious = () => {
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
            onSubmit={handleSubmit(handleNext)}
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
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="firstName"
                className={Styles.labelStyle}>
                First Name
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='firstName'
                required
                placeholder={Details.bio.first_name}
                defaultValue={bio.firstName}
                {...register("firstName", { required: true, maxLength: 20 })}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="lastName"
                className={Styles.labelStyle}>
                Last Name
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='lastName'
                required
                placeholder={Details.bio.last_name}
                defaultValue={bio.lastName}
                {...register("lastName", { required: true, maxLength: 20 })}
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
                required
                placeholder={Details.bio.role}
                defaultValue={bio.role}
                {...register("role", { required: true, maxLength: 20 })}
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
                required
                placeholder={Details.bio.description}
                defaultValue={bio.description}
                {...register("description", { required: true, maxLength: 320 })}
              ></textarea>
            </div>

            <div className={Styles.buttonWrapper}>
              <button
                type='text'
                className={Styles.button}
                onClick={() => handlePrevious()}
              >
                Back
              </button>
              <button type='submit' className={Styles.button}>Next </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Bio