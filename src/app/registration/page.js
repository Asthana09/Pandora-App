import Link from 'next/link'
import React from 'react'


const Registration = () => {
  return (
    <div>
        <h1 className='text-blue-900 font-bold text-2xl' >
           <p>Sign Up Here</p>  
            <Link href="/logIn" className='font-bold '>If already registered - Sign In</Link>

        </h1>
    </div>
  )
}

export default Registration