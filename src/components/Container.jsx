import React from 'react'

const container = ({children, className}) => {
  return (
    <div className={`w-[1170px] m-auto ${className}`}>{children}</div>
  )
}

export default container