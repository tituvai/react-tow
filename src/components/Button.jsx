import React from 'react'

const Button = ({allBtn, className}) => {
  return (
    <button className={`text-sm uppercase font-poppins font-medium rounded-full cursor-pointer ${className}`}>{allBtn}</button>
  )
}

export default Button