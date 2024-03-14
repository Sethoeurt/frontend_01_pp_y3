import React, { useEffect, useState } from 'react'
import Styles from '../../styles/input.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Details } from '../../data/details'
import { scrollToTop } from '../../utils/controls.js'
import { modifyAddress } from '../../redux/slices/addressSlice.js'
import { previousComponents, nextComponents } from '../../redux/slices/sliceFillDetails.js'


function Address() {
  const dispatch = useDispatch();
  const addressInitialState = useSelector(state => state.address);
  const { register, handleSubmit } = useForm();

  const [address, setAddress] = useState(() => {
    const storedAddress = localStorage.getItem("storeAddress");
    return storedAddress ? JSON.parse(storedAddress) : addressInitialState;
  });


  const handleNext = (data) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      ...data,
    }));
    dispatch(modifyAddress({ ...address, ...data }));
    dispatch(nextComponents(1));
    scrollToTop()
    localStorage.setItem("storeAddress", JSON.stringify({ ...address, ...data }));
  }

  const handlePrevious = () => {
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
            onSubmit={handleSubmit(handleNext)}
          >
            <div className={Styles.labelInputWrapper}>
              <label
                htmlFor="postalCode"
                className={Styles.labelStyle}>
                Postal Code
              </label>
              <input
                className={Styles.inputStyle}
                type="number"
                id='postalCode'
                placeholder={Details.address.postal_code}
                defaultValue={address.postal_code}
                {...register("postal_code", { required: true, maxLength: 8 })}
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
                required
                placeholder={Details.address.city}
                defaultValue={address.city}
                {...register("city", { required: true, maxLength: 20 })}
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
                required
                placeholder={Details.address.state}
                defaultValue={address.state}
                {...register("state", { required: true, maxLength: 20 })}
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
                required
                placeholder={Details.address.country}
                defaultValue={address.country}
                {...register("country", { required: true, maxLength: 20 })}
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
                defaultValue={address.phone}
                {...register("phone", { required: true, maxLength: 13 })}
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
                required
                placeholder={Details.address.email}
                defaultValue={address.email}
                {...register("email", { required: true, maxLength: 50 })}
              />
            </div>

            <div className={Styles.buttonWrapper}>
              <button
                type='text'
                className={Styles.button}
                onClick={() => handlePrevious()}
              >
                Back
              </button>
              <button type='submit' className={Styles.button}>Next & Submit </button>
            </div>


          </form>

        </div>
      </div>
    </>
  )
}

export default Address