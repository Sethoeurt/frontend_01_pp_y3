import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { templates } from '../data/templates.js'
import Styles from '../styles/home.module.css'
import { firstComponents } from '../redux/slices/sliceFillDetails.js'


function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fillDetails = () => {
    dispatch(firstComponents())
    navigate('/fillDetails');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <div className={Styles.container}>
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
    </>
  )
}

export default Home