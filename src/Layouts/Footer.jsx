import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

const paymentMethod = [
    {
        id: 1,
        name: 'momo',
        url: 'https://tfruit.com.vn/wp-content/uploads/2020/03/logo-momo.png',
    },
    {
        id: 2,
        name: 'visa',
        url: 'https://banner2.cleanpng.com/20180802/qo/kisspng-logo-visa-electron-credit-card-debit-card-visa-logo-5b62aa9d820235.5321822515331928615325.jpg',
    },
    {
        id: 3,
        name: 'mastercard',
        url: 'https://pngimg.com/uploads/mastercard/mastercard_PNG23.png',
    },
    {
        id: 4,
        name: 'vnpay',
        url: 'https://play-lh.googleusercontent.com/DvCn_h3AdLNNDcv3ftqTqP83gw6h65GMEPg3x6u788wB3F3ENNFcHgrHcWJNOPy4epg',
    },
    {
        id: 5,
        name: 'zalopay',
        url: 'https://sharetmedia.com/wp-content/uploads/2021/08/unnamed-2.png',
    },
];

const policy = [
    {
        id: 1,
        title: 'Chính sách bảo mật',
        path: '#',
    },
    {
        id: 2,
        title: 'Chính sách vận chuyển',
        path: '#',
    },
    {
        id: 3,
        title: 'Chính sách đổi trả, bảo hành',
        path: '#',
    },
];

const Footer = () => {
    return (
        <section className='footer py-10 shadow-sm shadow-gray-500'>
            <div className='px-4 '>
                <div className='flex flex-col md:flex-row justify-between items-start mb-4'>
                    <div className='px-2.5 mb-7 w-full md:w-2/6'>
                        <h5 className='mb-2 md:mb-4'>
                            PAYMENT METHODS
                        </h5>
                        <div className='flex items-end gap-1'>
                            {
                                paymentMethod.map((method) => (
                                    <div key={method.id} >
                                        <img
                                            src={method.url}
                                            alt={method.name}
                                            width="30"
                                            height="30"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='px-2.5 mb-7 w-full md:w-2/6'>
                        <h6 className='mb-2 md:mb-4'>
                            POLICIES
                        </h6>
                        {
                            policy.map((policy) => (
                                <p key={policy.id} >
                                    <Link to={policy.path}>
                                        {policy.title}
                                    </Link>
                                </p>
                            ))
                        }

                    </div>
                    <div className='px-2.5 mb-7 w-full md:w-2/6'>
                        <h6 className='mb-2 md:mb-4'>
                            CONTACT INFO
                        </h6>
                        <p className='text-sm leading-6.5'>
                            <FontAwesomeIcon
                                icon="fa-solid fa-location-pin"
                                className='pr-2'
                            />
                            203 Fake St. Mountain View, California, USA
                        </p>
                        <p className='text-sm leading-6.5'>
                            <FontAwesomeIcon
                                icon="fa-solid fa-phone"
                                className='pr-2'
                            />
                            +2 392 3929 210
                        </p>
                        <p className='text-sm leading-6.5 '>
                            <FontAwesomeIcon
                                icon="fa-solid fa-envelope"
                                className='pr-2'
                            />
                            email@domain.com
                        </p>
                    </div>
                </div>
                <hr />
                <div className='text-sm text-center m-8'>
                    Copyright ©2022 All rights reserved | This template is made
                    with
                    <span className='whitespace-nowrap'>
                        <FontAwesomeIcon
                            className='px-2'
                            icon="fa-solid fa-heart"
                        />
                        by Me
                    </span>

                </div>
            </div>
        </section>
    )
}

export default Footer
