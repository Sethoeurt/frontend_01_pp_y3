import React from 'react'
import Styles from '../../styles/input.module.css'
import { Details } from '../../data/details'

function Address() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.wrapper}>
          <div className={Styles.title}>Address </div>
          <div className={Styles.inputForm}>

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
              />
            </div>

            <button className={Styles.button}>Next </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Address