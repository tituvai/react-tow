import React from 'react'

const PartName = ({partText, className}) => {
  return (
    <h3 className={`text-base text-allBtnC font-poppins font-medium leading-[1,5px] uppercase ${className}`}>{partText}</h3>
  )
}

export default PartName