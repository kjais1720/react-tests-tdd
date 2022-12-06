import React from 'react'

const StarbucksInput = ({name, value, onChange, error}) => {
  return (
    <>
    <label htmlFor={name}>{name}</label>
    <input id={name} />
    </>
  )
}

export default StarbucksInput