import React from 'react'
import Header from './Header'

function Login() {
  return (
    
    <div> 
        <Header/>
        <div className='absolute'>
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg"
            alt="background"/>
            </div>

            <form className='w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-0'>
                <h1 className='font-bold text-3xl py-4'>Sign In</h1>
                <input  type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input  type="password" placeholder='Password' className='p-4 my-4 min-w-full  bg-gray-700' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
                
            </form>
        
        
    </div>
  )
}

export default Login