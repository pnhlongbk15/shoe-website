import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import InputField from '../FormFields/InputField'

import { useDispatch, useSelector } from 'react-redux'
import { register } from '~/Redux/Slice/userSlice'

const schema = yup
        .object({
                username: yup
                        .string()
                        .required('* Vui lòng nhập tên tài khoản của bạn'),
                email: yup
                        .string()
                        .required('* Vui lòng nhập địa chỉ email')
                        .email('Vui lòng điền địa chỉ email hợp lệ'),
                password: yup
                        .string()
                        .required('* Vui lòng nhập mật khẩu')
                        .min(8, 'Vui lòng nhập ít nhất 8 kí tự'),
                confirmPassword: yup
                        .string()
                        .required('* Vui lòng nhập mật khẩu xác nhận')
                        .min(8, 'Vui lòng nhập ít nhất 8 kí tự')
                        .oneOf(
                                [yup.ref('password')],
                                'Chưa trùng khớp với mật khẩu trên',
                        ),
        })

const RegisterForm = () => {
        const dispatch = useDispatch()
        const navigate = useNavigate()
        const { currentUser } = useSelector((state) => state.user)

        const {
                handleSubmit,
                control,
                formState: { errors }
        } = useForm({
                defaultValues: {
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                },
                resolver: yupResolver(schema)
        })

        const onSubmit = (data) => {
                dispatch(register({ ...data }));
        }

        useEffect(() => {
                if (currentUser) {
                        navigate('/')
                }
        }, [currentUser])

        return (
                <div className='my-16 md:my-20'>
                        <div className='pt-8'>
                                <div className='w-full max-w-xs mx-auto md:px-6 py-8 space-y-8 md:shadow-md md:shadow-gray-300'>
                                        <div>
                                                <h2 className='text-center text-xl font-medium font'>
                                                        REGISTER
                                                </h2>
                                        </div>
                                        <form
                                                onSubmit={handleSubmit(onSubmit)}
                                        >
                                                <div className='space-y-6'>
                                                        <InputField
                                                                control={control}
                                                                name='username'
                                                                type='username'
                                                                error={errors.username}
                                                        />
                                                        <InputField
                                                                control={control}
                                                                name='email'
                                                                type='email'
                                                                error={errors.email}
                                                        />
                                                        <InputField
                                                                control={control}
                                                                name='password'
                                                                type='password'
                                                                error={errors.password}
                                                        />
                                                        <InputField
                                                                control={control}
                                                                name='confirmPassword'
                                                                type='password'
                                                                error={errors.confirmPassword}
                                                        />
                                                </div>
                                                <button className='mt-4 w-full text-center py-2 px-4 rounded-md text-sm font-medium text-white bg-amber-300 hover:bg-amber-400'>
                                                        Register
                                                </button>
                                                <div className='mt-2 text-sm'>
                                                        <span>
                                                                Do you have an account?
                                                        </span>
                                                        <Link
                                                                to='/login'
                                                                className="font-normal ml-1 text-indigo-600 hover:text-indigo-500"
                                                        >
                                                                Login
                                                        </Link>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        )
}

export default RegisterForm
