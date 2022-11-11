import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//component
import ProductSildeLoading from './SubHome/ProductSildeLoading';
import Slider from 'react-slick';
import ProductThumbnail from '../ProductThumbnail';
//data
import { productsApi } from '~/API/productsApi';

const sliderSettings = {
    infinite: true,
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

const Trending = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);

        const fetchProducts = async () => {
            const response = await productsApi.getAll()
            setProducts(response)
            setLoading(false)
        }
        fetchProducts()
    }, [])

    const trendProducts = products.filter((product)=> product.rating.rate === 5)

    return (
        <section className='mt-12'>
            <div className='flex justify-between items-baseline'>
                <p className='text-2xl font-semibold px-2 mb-4 bg-amber-300 relative title-deco'>
                    Trending
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
                                trendProducts.map((product) => (
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

export default Trending
