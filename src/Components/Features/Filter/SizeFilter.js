import React, { useEffect, useState } from 'react'

const SizeFilter = ({ filters, onChange }) => {
  const sizesList = [36, 37, 38, 39]
  const [sizes, setSizes] = useState([])

  useEffect(() => {
    setSizes([])
  },[filters.active])

  useEffect(()=>{
    onChange(sizes)
  },[sizes])

  const handleChangeSize = (size) => {
    setSizes(
      (prev) => {
        if (sizes.includes(size)) {
          return prev.filter((x) => x !== size)
        } else {
          return [...prev, size]
        }
      }
    )
  }
  
  return (
    <div name='SizeFilter' className='flex flex-col mb-8'>
      <h6 className='text-xl font-medium'>Category</h6>
      {
        sizesList.map((size) => (
          <label key={size} className='checkbox-container' >
            <input
              type="checkbox"
              className='mr-2'
              onChange={() => handleChangeSize(size)}
              checked={sizes.includes(size)}
            />
            <span>{size}</span>
          </label>
        ))
      }
    </div>
  )
}

export default SizeFilter
