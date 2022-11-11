import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProductQuantity = ({ quantity, onUpdate, onDecre, onIncre }) => {

  return (
    <div className='inline-flex items-center border border-spacing-2 border-black'>
      <div
        onClick={() => {
          quantity >= 2 ? onDecre() : onUpdate(1)
        }}
        className='flex items-center hover:cursor-pointer hover:text-white hover:bg-black border-r border-black'
      >
        <FontAwesomeIcon
          className='p-2 text-xs '
          icon="fa-solid fa-minus "
        />
      </div>
      <div
        className='text-center'
      >
        <input
          className='w-12 outline-none text-center'
          type={'text'}
          value={quantity}
          onChange={(e) => Number(e.target.value) ? onUpdate(e.target.value) : onUpdate(1)}
        />
      </div>
      <div
        onClick={() => onIncre()}
        className='flex items-center hover:cursor-pointer hover:text-white hover:bg-black border-l border-black'
      >
        <FontAwesomeIcon
          className='p-2 text-xs'
          icon="fa-solid fa-plus "
        />
      </div>
    </div>
  )
}

export default ProductQuantity
