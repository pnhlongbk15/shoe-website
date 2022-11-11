import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logout } from '~/Redux/Slice/userSlice'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [onSearch, setOnSearch] = useState(false);

    const { isLogin, currentUser } = useSelector((state) => state.user)
    const cartProducts = useSelector((state) => state.cart)

    const toltalItems = cartProducts.reduce((total, product) => {
        return total + product.quantity
    }, 0)

    const handleLogout = () => {
        dispatch(logout())
    }
    console.log(onSearch)
    const handleChange = () => {
        navigate('/products')
    }

    return (
        <header className='w-full h-16 md:h-20 bg-white fixed top-0 z-20 shadow-sm shadow-gray-200'>
            <div className=' px-4 md:px-8 '>
                <div className='hidden md:flex'>
                    <div>
                        <Link
                            to="/"
                            className='leading-[5rem] text-4xl text-amber-300 font-bold text-shadow-xl '
                        >
                            MStore
                        </Link>
                    </div>
                    <div className='leading-[5rem] flex-1 text-center space-x-10 '>
                        <NavLink
                            to="/"
                            className='text-xl font-medium pb-1'
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to="/products"
                            className='text-xl font-medium pb-1'
                        >
                            PRODUCTS
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className='text-xl font-medium pb-1'
                        >
                            CONTACT
                        </NavLink>
                    </div>
                    <div className='text-base leading-[5rem] flex gap-4'>
                        {
                            isLogin ? (
                                <div className='sign-in relative group'>
                                    Hi{' '}
                                    <span className='font-semibold'>
                                        {currentUser?.displayName}
                                    </span>
                                    <div className='absolute left-0 bottom-0 translate-y-full invisible group-hover:visible'>
                                        <ul className='flex flex-col bg-white text-center px-1 leading-[3rem] whitespace-nowrap '>
                                            <li
                                                className='text-sm py-2 px-4 shadow-sm border-l-2 border-transparent hover:cursor-pointer hover:border-amber-300 hover:border-l-2 hover:font-normal'
                                            >
                                                Info account
                                            </li>
                                            <li
                                                className='text-sm py-2 px-4 shadow-sm border-l-2 border-transparent hover:cursor-pointer hover:border-amber-300 hover:border-l-2 hover:font-normal'
                                                onClick={handleLogout}>
                                                Logout
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                >
                                    <FontAwesomeIcon icon="fa-solid fa-user" />
                                </Link>
                            )
                        }
                        <p className='inline-flex items-center'>
                            {
                                !onSearch ? (
                                    <FontAwesomeIcon
                                        onClick={() => { setOnSearch(!onSearch) }}
                                        className='hover:cursor-pointer'
                                        icon="fa-solid fa-magnifying-glass"
                                    />
                                ) : (
                                    <input
                                        onBlur={() => { setOnSearch(false) }}
                                        onChange={handleChange}
                                        className='text-sm h-6 p-2 outline-none border-2 rounded border-cyan-300'
                                        placeholder='search...'
                                    />
                                )
                            }
                        </p>
                        <Link to="/cart">
                            <p className='relative inline'>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-cart-plus"
                                />
                                <span className='absolute -top-3 -right-1.5 px-0.5 text-2xs leading-4 font-medium text-white bg-red-600 rounded-full'>
                                    {toltalItems}
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>
                {/* small device header */}
                <div className='leading-[4rem] flex md:hidden justify-between'>
                    <div
                        className=''
                    >
                        <FontAwesomeIcon
                            className=''
                            icon="fa-solid fa-bars"
                        />
                    </div>
                    <div>
                        <Link
                            to="/"
                            className='text-2xl text-amber-300 font-bold text-shadow-xl '
                        >
                            MStore
                        </Link>
                    </div>
                    <div>
                        <p className='inline mr-5'>
                            <FontAwesomeIcon
                                icon="fa-solid fa-magnifying-glass"
                            />
                        </p>
                        <Link to="/cart">
                            <p className='relative inline'>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-cart-plus"
                                />
                                <span className='absolute -top-3 -right-1.5 px-0.5 text-2xs leading-4 font-medium text-white bg-red-600 rounded-full'>
                                    {toltalItems}
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
