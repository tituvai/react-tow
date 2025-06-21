
import React from 'react'

const Peragrap = ({peraText, className}) => {
  return (
    <p className={`text-base leading-8 font-poppins text-stone-500 ${className}`}>{peraText}</p>
  )
}

export default Peragrap