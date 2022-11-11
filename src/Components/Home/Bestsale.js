import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//component
import Slider from 'react-slick'
import ProductSildeLoading from './SubHome/ProductSildeLoading'
import ProductThumbnail from '../ProductThumbnail'
// data
import { productsApi } from '~/API/productsApi'

const sliderSettings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
            },
        },
    ],
};



const Bestsale = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true);

        const fetchProducts = async () => {
            try {
                const response = await productsApi.getAll()
                setProducts(response)
                setLoading(false)
            } catch (e) {
                alert(e.message)
            }
        }
        fetchProducts()
    }, [])

    console.log(products)
    const saleProducts = products.filter((product) => product.promotionPercent >= 25)

    return (
        <section className='mt-12'>
            <div className='flex justify-between items-baseline'>
                <p className='text-2xl font-semibold px-2 mb-4 bg-amber-300 relative title-deco'>
                    Best Sale
                </p>
                <Link
                    to={'/products'}
                    className='text-sm font-medium px-2 text-white bg-black hover:cursor-pointer hover:text-opacity-70'
                >
                    more
                </Link>
            </div>

            <div className='sm:-mx-2 md:-mx-2 lg:-mx-2'>

                {
                    loading ? (
                        <ProductSildeLoading />
                    ) : (
                        <Slider {...sliderSettings}>
                            {
                                saleProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className='sm:px-2 md:px-2 lg:px-2'
                                    >
                                        <ProductThumbnail product={product} />
                                    </div>
                                ))
                            }

                        </Slider>
                    )
                }
            </div>
        </section>

    )
}

export default Bestsale
