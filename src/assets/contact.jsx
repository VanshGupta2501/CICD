import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
const contact = () => {
    const navigate = useNavigate()

  return (
    <div className='contactColour'>
      <p onClick={()=>navigate('/')}>contact</p>
    </div>
  )
}

export default contact
