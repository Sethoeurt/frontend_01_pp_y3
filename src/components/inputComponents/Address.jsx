import React from 'react'
import Styles from '../../styles/input.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Details } from '../../data/details'
import {scrollToTop} from '../../utils/controls.js'

import {
  setPostalcode, setCity, setState, 
  setCountry, setPhone, setEmail
} from '../../redux/slices/addressSlice.js'

import {
  previousComponents, nextComponents
} from '../../redux/slices/sliceFillDetails.js'


function Address() {
  const dispatch = useDispatch();
  const address = useSelector(state => state.address);

  const handleSubmit = async (e) => {
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
          <div className={Styles.title}>Address </div>

          <form
            className={Styles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="postalCode"
                className={Styles.labelStyle}>
                Postal Code
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='postalCode'
                placeholder={Details.address.postal_code}
                value={address.postal_code}
                onChange={(e) => dispatch(setPostalcode(e.target.value))}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="city"
                className={Styles.labelStyle}>
                City
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='city'
                placeholder={Details.address.city}
                value={address.city}
                onChange={(e) => dispatch(setCity(e.target.value))}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="state"
                className={Styles.labelStyle}>
                State
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='state'
                placeholder={Details.address.state}
                value={address.state}
                onChange={(e) => dispatch(setState(e.target.value))}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="country"
                className={Styles.labelStyle}>
                Country
              </label>
              <input
                className={Styles.inputStyle}
                type="text"
                id='country'
                placeholder={Details.address.country}
                value={address.country}
                onChange={(e) => dispatch(setCountry(e.target.value))}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="phone"
                className={Styles.labelStyle}>
                Phone
              </label>
              <input
                className={Styles.inputStyle}
                type='tel'
                id='phone'
                placeholder={Details.address.phone}
                value={address.phone}
                onChange={(e) => dispatch(setPhone(e.target.value))}
              />
            </div>

            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="email"
                className={Styles.labelStyle}>
                Email
              </label>
              <input
                className={Styles.inputStyle}
                type="email"
                placeholder={Details.address.email}
                value={address.email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
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

export default Address