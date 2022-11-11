import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductListLoading = () => {
    return (
        <section className='w-full flex flex-wrap justify-center sm:justify-between md:justify-between lg:justify-between'>
            {
                [1,2,3,4,5,6,7,8,9].map((e) => (
                    <div key={e} className='w-full sm:w-64 md:w-80 h-60 mb-2 '>
                        <Skeleton className='w-full h-full m-2'/>
                    </div>
                ))

            }

        </section>
    )
}

export default ProductListLoading
