import React from 'react'
import { templates } from '../data/templates.js'
import Styles from './home.module.css'

function Home() {
  return (
    <>
      <div className={Styles.container}>
        {
          templates.map((template) => {
            return (

              <div key={template.id} className={Styles.templatesImg}>
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