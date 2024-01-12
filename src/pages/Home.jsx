import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {scrollToTop} from '../utils/controls.js'
import { templates } from '../data/templates.js'
import { firstComponents } from '../redux/slices/sliceFillDetails.js'
import Styles from '../styles/home.module.css'

function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const fillDetails = () => {
    dispatch(firstComponents())
    navigate('/fillDetails');
    scrollToTop();
  }

  return (
    <>
      <div className={Styles.container}>

        <div className={Styles.headingWrapper}>
          <div className={Styles.heading}> Resume Templates</div>
          <div> Select a template to get started</div>
        </div>

        <div>
          <div className={Styles.templateWrapper}>
            {
              templates.map((template) => {
                return (
                  <div
                    key={template.id}
                    className={Styles.templatesImg}
                    onClick={() => fillDetails()}
                  >
                    <img
                      src={template.template_img}
                      alt={template.template_name}
                      height={'380px'}
                      width={'auto'}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Home