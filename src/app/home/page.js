// import ShareBtn from "../../component/ShareBtn"

import Link from "next/link"

const Home = () => {
     
  return (
    <div>
     {/* banner */}
      <div className="bg-gray-900 h-72">
      <h1 className="text-white text-5xl font-bold pt-20 text-center">
        Give <span className="text-rose-500">the</span> Name</h1>
      </div>
 
      {/* cards */}
      <div className="m-4 flex flex-wrap gap-2">      

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
        <div className="text-green-500 py-2 font-bold">2000</div>
      </div>
    </Link>
    
     
      </div>

      <Link href="/product" className="inline-blog text-blue-950 p-4 font-bold hover:underline">View All</Link>
    </div>
    
  )
}
export default Home
