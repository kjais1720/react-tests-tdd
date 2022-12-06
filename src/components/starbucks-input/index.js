import React from 'react'

const StarbucksInput = ({name, value, onChange, error}) => {
  return (
    <>
    <label htmlFor={name}>{name}</label>
    <input id={name} value={value} onChange={e=> onChange(e.target.value)} />
    </>
  )
}

export default StarbucksInput