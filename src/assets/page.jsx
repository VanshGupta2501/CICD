import React from 'react'
import { useNavigate } from 'react-router-dom'

const page = () => {
    const navigate = useNavigate()

  return (
    <div>
      <p onClick={()=>navigate('/contact')}>page</p>
    </div>
  )
}

export default page
