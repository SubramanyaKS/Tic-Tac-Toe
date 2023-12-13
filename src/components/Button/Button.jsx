import React from 'react'

const Button = ({classname, onClick,title}) => {
  return (
    <button className={classname} onClick={onClick}>{title}</button>
  )
}

export default Button