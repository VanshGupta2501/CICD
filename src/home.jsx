import React from 'react'
import { useNavigate } from 'react-router-dom'

const home = () => {
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(`/page`)
    }
  return (
    <div>
      <p onClick={handleNavigate}>home</p>
    </div>
  )
}

export default home
