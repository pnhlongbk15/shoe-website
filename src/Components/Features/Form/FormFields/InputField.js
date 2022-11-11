import React from 'react'
import { useController } from 'react-hook-form'

const EmailField = (props) => {
        const { field } = useController(props)
        
        return (
                <div >
                        <input
                                className='w-full outline-none border border-black px-3 py-1.5'
                                type={props.type}
                                placeholder={props.name}
                                name={props.name}
                                {...field}
                        />
                        <p>
                                {props.error?.message}
                        </p>
                </div>
        )
}

export default EmailField
