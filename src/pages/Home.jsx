import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { templates } from '../data/templates.js'
import { modifyDynamicStyle } from '../redux/slices/sliceDynamicStyle.js'
import { firstComponents } from '../redux/slices/sliceFillDetails.js'
import { scrollToTop } from '../utils/controls.js'
import Styles from '../styles/home.module.css'


function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(null);

  const fillDetails = (templateId) => {
    dispatch(firstComponents())
    navigate('/fillDetails');
    scrollToTop();
    dispatch(modifyDynamicStyle(templates[templateId - 1].dynamicStyle));
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
                    onMouseEnter={() => setIsHovered(template.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <img
                      src={template.template_img}
                      alt={template.template_name}
                      height={'380px'}
                      width={'auto'}
                    />

                    {isHovered === template.id && (
                      <div className={Styles.overlay}>
                        <button
                          onClick={() => fillDetails(template.id)}
                        > Use Template </button>
                      </div>
                    )}
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