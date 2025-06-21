import React from 'react'

const TextHading = ({hadeText, className}) => {
  return (
    <h3 className={`text-[44px] text-blackC font-poppins font-semibold ${className}`}>{hadeText}</h3>
  )
}

export default TextHading