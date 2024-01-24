import React, { useEffect, useState } from 'react'
import Styles from '../../styles/input.module.css'
import { DeleteForeverRounded } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { Details } from '../../data/details'
import { scrollToTop } from '../../utils/controls.js'
import { modifyEducation } from "../../redux/slices/educationSlice.js"
import { previousComponents, nextComponents } from '../../redux/slices/sliceFillDetails.js'


function Education() {
  const dispatch = useDispatch();
  const educationInitialState = useSelector(state => state.education);

  const [education, setEducation] = useState(() => {
    const storedEducation = localStorage.getItem("storeEducation");
    return storedEducation ? JSON.parse(storedEducation) : educationInitialState;
  });

  useEffect(() => {
    localStorage.setItem("storeEducation", JSON.stringify(education));
  }, [education]);

  const handleAddButtonClick = () => {
    if (education.length < 3) {
      setEducation([...education, {
        degree: "",
        domain: "",
        university: "",
        start_year: "",
        end_year: "",
      }])
    }
  }

  const handleRemoveButtonClick = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
    scrollToTop();
  }

  const handleInputChange = (index, value, fieldType) => {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index] };
    switch (fieldType) {
      case "degree": updatedEducation[index].degree = value; break;
      case "domain": updatedEducation[index].domain = value; break;
      case "university": updatedEducation[index].university = value; break;
      case "start_year": updatedEducation[index].start_year = value; break;
      case "end_year": updatedEducation[index].end_year = value; break;
      default: break;
    }
    setEducation(updatedEducation);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifyEducation(education));
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
          <div className={Styles.title}> Education  </div>

          <form
            className={Styles.inputForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            {
              education.map((item, index) => (
                <div key={index}>

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
                      value={item.degree}
                      onChange={(e) => handleInputChange(index, e.target.value, 'degree')}
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
                      value={item.domain}
                      onChange={(e) => handleInputChange(index, e.target.value, 'domain')}
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
                      value={item.university}
                      onChange={(e) => handleInputChange(index, e.target.value, 'university')}
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
                      value={item.start_year}
                      onChange={(e) => handleInputChange(index, e.target.value, 'start_year')}
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
                      value={item.end_year}
                      onChange={(e) => handleInputChange(index, e.target.value, 'end_year')}
                    />
                  </div>

                  <div className={Styles.labelInputWrapper}>
                    <div
                      className={Styles.buttonRemove}
                      onClick={() => handleRemoveButtonClick(index)}>
                      <p>Remove  </p>
                      <DeleteForeverRounded />
                    </div>
                  </div>

                  < hr className={Styles.hrLine} />
                </div>
              ))
            }

            <div
              className={Styles.buttonAdd}
              onClick={() => handleAddButtonClick()}
            >
              <p>Add More </p>
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