import React from 'react'

const List = ({listItem, className}) => {
  return (
    <li className={`text-sm font-poppins text-blackC leading-1.5 uppercase ${className}`}>{listItem}</li>
  )
}

export default List