import React from 'react'
import './choiceButton.css'
const ChoiceButton = ({onClick, title}) => {
  return (
    <div className='div-button' onClick={onClick}>
    {title}
</div>
  )
}

export default ChoiceButton