import React from 'react'
import Bestsale from '~/Components/Home/Bestsale'
import Trending from '~/Components/Home/Trending'
import Videobg from '~/Components/Home/Videobg'


const Home = () => {
  return (
    <div className='my-16 md:my-20'>
      <Videobg/>
      <div className='px-4 md:px-8 mx-auto'>
        <Trending/>
        <Bestsale/>
      </div>
    </div>
  )
}

export default Home
