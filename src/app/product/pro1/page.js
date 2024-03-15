import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import ShareBtn from '../../../component/ShareBtn'
import AddToCart from '../../../component/AddCart'




const Product1 = () => {
  return (
    <div className='m-2 px-20'>
      <div className='flex justify-around items-center flex-wrap'>
        <div className='w-50 h-50'>
          <img src='/images/image1.jpg' className='w-full h-auto'></img>
        </div>
        <div className="  w-80 border rounded-md shadow-lg p-6 bg-white">
          <h2 className='text-3xl font-semibold'> Product One </h2>
          <div className='flex pt-2 gap-2'>
            <CheckIcon className='text-lime-500 w-5 h-5'></CheckIcon>
            <span className='font-semibold'>In Stock</span> |
            <ShareBtn/>
          
          </div>

          <div className='mt-4 border-t pt-4'>
            <p className='text-gray-500'> Price</p>
            <p className='text-xl font-semibold'>2000</p>
          </div>
          
         <AddToCart/>
         
        </div>
      </div>
      <p className='mt-8 text-2xl'>
        this will contain product description
      </p>
    </div>
  )
}

export default Product1