import React, { useState } from 'react'
import Styles from '../../styles/input.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { scrollToTop } from '../../utils/controls.js'
import { previousComponents, nextComponents } from '../../redux/slices/sliceFillDetails.js'
import {setKeySkills} from '../../redux/slices/keySkillsSlice.js'


function KeySkills() {

  const dispatch = useDispatch();
  const keySkillsArray = useSelector((state) => state.keySkills);

  const [keySkills, setKeySkillsList] = useState(keySkillsArray);

  const handleAddButtonClick = () => {
    setKeySkillsList([...keySkills, '']);
  };

  const handleInputChange = (index, value) => {
    const updatedKeySkills = [...keySkills];
    updatedKeySkills[index] = value;
    setKeySkillsList(updatedKeySkills);
  };

  const handleRemoveButtonClick = (index) => {
    const updatedKeySkills = [...keySkills];
    updatedKeySkills.splice(index, 1);
    setKeySkillsList(updatedKeySkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setKeySkills(keySkills))
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
            onSubmit={(e) => handleSubmit(e)}
          >
            {
              keySkills.map((value, index) => (
                <div
                  key={index}
                  className={Styles.skillWrapper}
                >
                  <input
                    className={Styles.inputStyleSkill}
                    type="text"
                    placeholder={`Skills ${index + 1}`}
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <div
                    className={Styles.button}
                    onClick={() => handleRemoveButtonClick(index)}>
                    <p>Remove</p>
                  </div>
                </div>
              ))
            }

            <div
              className={Styles.button}
              onClick={handleAddButtonClick}>
              <p>Add More Skills</p>
            </div>

            <div className={Styles.buttonWrapper}>
              <div
                className={Styles.button}
                onClick={() => goToPreviousComponents()}>
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