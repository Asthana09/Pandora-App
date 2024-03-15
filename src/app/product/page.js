import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <div
    className='my-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'> 
    {/* product 1 */}
    <Link href="/product/pro1" className="w-full sm:w-64 h-60 rounded border border-gray-200 hover:cursor-pointer hover:shadow-xl">
     <img src="/images/image1.jpg" className="w-full h-44"/>
      
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-blue-950">Pro Name</h1>
          <p className="w-40 truncate">description about the product you want to buy</p>
        </div>
        <div className="text-green-500 py-2 font-bold">2000
        </div>
      </div>
    </Link>

        {/* product 2 */}
    <Link href="/product/pro1" className="w-full sm:w-64 h-60 rounded border border-gray-200 hover:cursor-pointer hover:shadow-xl">
     <img src="/images/image1.jpg" className="w-full h-44"/>
      
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-blue-950">Pro Name</h1>
          <p className="w-40 truncate">description about the product you want to buy</p>
        </div>
        <div className="text-green-500 py-2 font-bold">2000
        </div>
      </div>
    </Link>

        {/* product 3 */}
    <Link href="/product/pro1" className="w-full sm:w-64 h-60 rounded border border-gray-200 hover:cursor-pointer hover:shadow-xl">
     <img src="/images/image1.jpg" className="w-full h-44"/>
      
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-blue-950">Pro Name</h1>
          <p className="w-40 truncate">description about the product you want to buy</p>
        </div>
        <div className="text-green-500 py-2 font-bold">2000
        </div>
      </div>
    </Link>
    </div>
  )
}

export default Product