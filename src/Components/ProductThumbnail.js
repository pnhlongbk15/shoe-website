import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useDispatch } from 'react-redux'
import { addToCart } from '~/Redux/Slice/cartSlice'

import { useSnackbar } from 'notistack'

const ProductThumbnail = ({ product }) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar()

    const notiSuccess = () => {
        enqueueSnackbar('Add product success!', {
            variant: 'success'
        })
    }

    const handleAddItem = (product) => {
        dispatch(addToCart(product))
        notiSuccess()
    }
    return (
        <div className='px-2.5 shadow-sm shadow-gray-200 group'>
            <div className='relative'>
                <img
                    className='w-full h-full object-cover'
                    src={product.image}
                    alt={product.title}
                />
                <div className='absolute w-full p-1 bg-slate-200 divide-x divide-gray-700 text-sm flex justify-between leading-[1rem] bottom-0 invisible group-hover:visible animate-bounce'>
                    <p
                        className='text-xs hover:cursor-pointer'
                        onClick={()=> handleAddItem(product)}
                    >
                        Add Cart
                        <FontAwesomeIcon
                            className='pl-1 cursor-pointer hover:opacity-70'
                            icon="fa-solid fa-cart-plus"
                        />
                    </p>
                    <Link to={`/products/${product.id}`} >
                        <FontAwesomeIcon
                            className='pl-2 cursor-pointer hover:opacity-70'
                            icon="fa-solid fa-eye"
                        />
                    </Link>
                </div>
            </div>

            <div className='my-2'>
                <p className='text-sm font-light truncate'>{product.title}</p>
                <div className='pb-2'>
                    <span className='text-sm font-medium'>
                        {
                            new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                            }).format(product.originalPrice)
                        }
                    </span>
                    {
                        product.promotionPercent === 0 ? null : (
                            <span className='text-xs mx-2 bg-yellow-200'>
                                -{product.promotionPercent}%
                            </span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductThumbnail
