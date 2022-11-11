import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import ProductQuantity from '~/Components/Products/SubProducts/ProductQuantity';
import { decrementByAUnit, incrementByAUnit, updateQuantity } from '~/Redux/Slice/cartSlice';


const Cart = () => {
   const dispatch = useDispatch()
   const cartProducts = useSelector(state => state.cart);
   console.log('cart', cartProducts)

   const increment = (product) => {
      dispatch(incrementByAUnit(product))
   }
   const decrement = (product) => {
      dispatch(decrementByAUnit(product))
   }
   const update = (product, newQuantity) => {
      dispatch(updateQuantity({ product, newQuantity }))
   }

   const totalItems = cartProducts.reduce((total, product) => {
      return total + product.quantity
   }, 0);
   console.log('totalItems', totalItems)
   const subTotal = cartProducts.reduce((total, product) => {
      return total + product.salePrice * product.quantity
   }, 0);
   console.log('subTotal', subTotal)
   return (
      <div className='my-16 md:my-20'>
         <div className='my-28 px-4 md:px-8 mx-auto'>
            <div className='wrap flex flex-col md:flex-row justify-center md:justify-between gap-6'>
               <div className='flex flex-col w-full md:w-3/4'>
                  <div className='flex justify-between'>
                     <div className='w-1/3 font-medium'>
                        Products
                     </div>
                     <div className='w-2/3 font-medium'>
                        <div className='flex '>
                           <span className='basis-1/3 pl-4'>
                              Unit price
                           </span>
                           <span className='basis-1/3 pl-4'>
                              A mount
                           </span>
                           <span className='basis-1/3 pl-4'>
                              Prices
                           </span>
                        </div>
                     </div>
                  </div>
                  {/* show product in cart */}
                  {
                     cartProducts.map((product) => {

                        return (
                           <div
                              key={product.id}
                              className='flex justify-between mb-2'
                           >
                              <div className='w-1/3 flex items-center gap-4'>
                                 <img
                                    src={product.image}
                                    alt={product.title}
                                    width={50}
                                    height={50}
                                 />
                                 <Link
                                    className='text-base truncate'
                                    to={`/products/${product.id}`}
                                 >
                                    {product.title}
                                 </Link>
                              </div>
                              <div className='w-2/3'>
                                 <div className='h-full flex items-center'>
                                    <span className='basis-1/3 pl-4'>
                                       {
                                          new Intl.NumberFormat('vi-VN', {
                                             style: 'currency',
                                             currency: 'VND'
                                          }).format(product.salePrice)
                                       }
                                    </span>
                                    <span className='basis-1/3 pl-4'>
                                       <ProductQuantity
                                          quantity={product.quantity}
                                          onUpdate={(newQuantity) => newQuantity !== 1 ? update(product, newQuantity) : update(product, 1)}
                                          onIncre={() => increment(product)}
                                          onDecre={() => decrement(product)}
                                       />
                                    </span>
                                    <span className='basis-1/3 pl-4'>
                                       {
                                          new Intl.NumberFormat(
                                             'vi-VN', {
                                             style: 'currency',
                                             currency: 'VND'
                                          }
                                          ).format(
                                             product.salePrice * product.quantity
                                          )
                                       }
                                    </span>
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
               <div className='w-full md:w-1/4 '>
                  <div className='w-full shadow-md p-5'>
                     <div className='pb-5'>
                        <div className='flex flex-col mb-1'>
                           <p className='whitespace-nowrap font-medium'>Total products:</p>
                           <span className='ml-auto'>
                              {totalItems}
                           </span>
                        </div>
                        <div className='flex flex-col'>
                           <p className='font-medium'>Subtotal:</p>
                           <span className='ml-auto'>
                              {
                                 new Intl.NumberFormat(
                                    'vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                 }
                                 ).format(subTotal)
                              }
                           </span>
                        </div>
                     </div>
                     <div className='flex flex-col gap-2'>
                        <Link
                           className='text-center text-white text-base font-normal bg-black py-1 border border-spacing-2 border-black hover:cursor-pointer hover:text-black hover:bg-white'
                        >
                           Order
                        </Link>
                        <Link
                           className='whitespace-nowrap text-center text-white text-base font-normal bg-black py-1 border border-spacing-2 border-black hover:cursor-pointer hover:text-black hover:bg-white'
                        >
                           Continue purchase
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart
