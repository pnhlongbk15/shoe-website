import React from 'react'
import { useController } from 'react-hook-form'

const PasswordField = (props) => {
        const { field } = useController(props)
        
        return (
                <div>
                        <input
                                className='outline-none border border-black px-3 py-1.5'
                                type={props.name}
                                placeholder={props.name}
                                name={props.name}
                                {...field}
                        />
                        <p>{props.error?.message}</p>
                </div>
        )
}

export default PasswordField
