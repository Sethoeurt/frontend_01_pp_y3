import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      Home
      <nav>
        <ul>

          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

        </ul>
      </nav>

      
    </>
  )
}

export default Home