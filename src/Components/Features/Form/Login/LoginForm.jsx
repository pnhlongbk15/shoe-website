import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import InputField from '../FormFields/InputField'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '~/Redux/Slice/userSlice'

const schema = yup
   .object({
      email: yup.string().email('Vui lòng điền địa chỉ email hợp lệ').required('* Vui lòng nhập địa chỉ email'),
      password: yup.string().required('* Vui lòng nhập mật khẩu'),
   })

const LoginForm = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { currentUser } = useSelector((state) => state.user)

   const { register, control, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         email: '',
         password: ''
      },
      resolver: yupResolver(schema),
   });


   const onSubmit = (data) => { dispatch(signIn({ ...data })) }

   useEffect(() => {
      if (currentUser) {
         navigate('/')
      }
   }, [currentUser, navigate])


   // const firebaseuiConfig = {
   //    signInFlow: 'redirect',
   //    signInSuccessUrl: './',
   //    signInOptions: [
   //       firebase.auth.GoogleAuthProvider.PROVIDER_ID
   //    ]
   // }

   return (
      <div className='my-16 md:my-20 text-center' >
         <div className='space-y-6 inline-flex flex-col gap-2 md:shadow-md md:shadow-gray-300 my-8 p-8'>
            <div>
               <FontAwesomeIcon icon="fa-solid fa-user" />
            </div>
            <form
               className='flex flex-col'
               onSubmit={handleSubmit(onSubmit)}
            >
               <div className='space-y-4 flex flex-col'>
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

               </div>
               <div className='flex justify-between text-sm mt-1'>
                  <div className='flex items-center'>
                     <input
                        type='checkbox'
                        id='remember-inf'
                     />
                     <label htmlFor='remember-inf'>remember</label>
                  </div>
                  <Link to='#'> forget? </Link>
               </div>

               <button
                  type='submit'
                  className='mt-4 w-full text-center py-2 px-4 rounded-md text-sm font-medium text-white bg-amber-300 hover:bg-amber-400'
               >
                  Log in
               </button>

               <div className='text-sm mt-1'>
                  <span>Don't you have a account?</span>
                  <Link 
                     className='font-normal ml-1 text-indigo-600 hover:text-indigo-500'
                     to={'/register'}
                  >
                     Register
                  </Link>
               </div>
               <hr />
               <div>
                  <div>
                     {/* <StyledFirebaseAuth
                        // uiConfig={firebaseuiConfig}
                        firebaseAuth={firebase.auth()}
                     /> */}
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}

export default LoginForm
