import React from 'react'

export const MySelect = ({ options, defautValue, value, onChange }) => {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option disabled value=''>
        {defautValue}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}
