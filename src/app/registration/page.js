 "use client"
// import Link from 'next/link'
import React from 'react'
import {useState} from 'react'




const Registration = () => {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [phone , setPhone] = useState("")
  const [address , setAddress] = useState("")
  const [pincode , setPincode] = useState("")
  const [password , setPassword] = useState("")

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h2>Register</h2>

      {/* <label className='text-left' htmlFor='name'>Name</label> */}
      <input className='p-2 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700'
       type='text' placeholder='Name' 
      value={name}  
      onChange={(e)=>setName(e.target.value)}
      />

      <input className='p-2 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700'
      type='email' placeholder='Email' 
      value={email}  
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input className='p-2 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700'
      type='number' placeholder='Mobile Number' 
      value={phone}  
      onChange={(e)=>setPhone(e.target.value)}
      />


    <input className='p-2 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700' 
     type='text' placeholder='Address' 
      value={address}  
      onChange={(e)=>setAddress(e.target.value)}
      />

      <input className='p-2 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700'
      type='number' placeholder='Pin' 
      value={pincode}  
      onChange={(e)=>setPincode(e.target.value)}
      />
      
      <input className='p-2 border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700'
      type='password' placeholder='Password' 
      value={password}  
      onChange={(e)=>setPassword(e.target.value)}
      />
        
        <button className='btn waves-effect waves-light' type='submit'>SignUp</button>
      
       
        {/* <link href="/logIn"><a><h5>If already Registered</h5></a></link> */}
    </div>
  )
}

export default Registration