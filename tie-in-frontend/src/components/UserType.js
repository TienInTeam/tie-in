import React from 'react'
import Button from './Button'

function UserType({ image, onClick, description }) {
  return (
    <div className="user-type">
      <div>
        <img src={image} alt="" />
        <Button onClick={onClick} />
        </div>
        <div className="description">{description}</div>
      </div>
  
  )
}

export default UserType