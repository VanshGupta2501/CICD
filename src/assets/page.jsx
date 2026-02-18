import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
const page = () => {
    const navigate = useNavigate()

  return (
    <div className='pageColour'>
      <p onClick={()=>navigate('/contact')}>page</p>
    </div>
  )
}

export default page
