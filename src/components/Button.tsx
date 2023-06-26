import React from 'react'

interface Props {
  name : String
  handleEvent : () => void
}

export const Button: React.FC<Props> = ({name, handleEvent}) => {
  return (
    <button className='Header-button' onClick={handleEvent} data-testid={`${name}Btn`}>{name}</button>
  )
}
