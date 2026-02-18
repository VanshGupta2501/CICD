import React from 'react'
import { useNavigate } from 'react-router-dom'

const contact = () => {
    const navigate = useNavigate()

  return (
    <div>
      <p onClick={()=>navigate('/')}>contact</p>
    </div>
  )
}

export default contact
