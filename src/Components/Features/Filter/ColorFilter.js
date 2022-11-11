import React, { useEffect, useState } from 'react'

const ColorFilter = ({ filters, onChange }) => {
   const colorsList = {
      trắng: 'white',
      đen: 'black',
      đỏ: 'red',
      hồng: 'pink',
      vàng: 'yellow',
      xanh: 'blue'
   }

   const [colors, setColors] = useState([])

   useEffect(()=>{
      setColors([])
   },[filters.active])

   useEffect(()=>{
      onChange(colors)
   },[colors])

   const handleChangeColor = (color) => {
      setColors(
         prev => {
            if (colors.includes(color)) {
               return prev.filter((x) => x !== color)
            } else {
               return [...prev, color]
            }
         }
      )
   }

   return (
      <div className='flex flex-col mb-8'>
         <h6 className='text-xl font-medium'>Category</h6>
         {
            Object.entries(colorsList).map((color) => (
               <label key={color[1]} className='checkbox-container' >
                  <input
                     type="checkbox"
                     className='mr-2'
                     onChange={()=> handleChangeColor(color[0])}
                     checked={colors.includes(color[0])}
                  />
                  <span>{color[1]}</span>
               </label>
            ))
         }
      </div>
   )
}

export default ColorFilter
