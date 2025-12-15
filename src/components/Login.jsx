import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/Validate'

function Login() {
  const [isSignInForm,setisSignInForm]=useState(true)
  const [errMessage,setErrMessage]=useState()
  const name=useRef(null)
  const email=useRef(null)
  const password=useRef(null)
  function isToggleForm(){
      setisSignInForm(!isSignInForm)
  }
  const handleButtonclick=()=>{
   const message=checkValidateData(name.current.value,email.current.value,password.current.value)
   setErrMessage(message)
}



  return (
    
    <div> 
        <Header/>
        <div className='absolute'>
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg"
            alt="background"/>
            </div>

            <form 
            onSubmit={(e)=>e.preventDefault(null)}
            className='w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-0'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ?'Sign In' :'Sign Up'}</h1>
                {!isSignInForm && (
                  <input 
                  ref={name} 
                  type="text" 
                  placeholder='Name' 
                  className='p-4 my-4 w-full bg-gray-700' />)}

                <input  
                ref={email}
                type="text"
                 placeholder='Email Address'
                  className='p-4 my-4 w-full bg-gray-700' />

                <input
                ref={password}  
                type="password" 
                placeholder='Password' 
                className='p-4 my-4 min-w-full  bg-gray-700' />

                <p className='text-red-500 font-bold text-lg py-2'>{errMessage}</p>

                <button 
                onClick={handleButtonclick} 
                className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ?'Sign In' :'Sign Up'}
                </button>

                <p className='py-4 cursor-pointer' onClick={isToggleForm}>{isSignInForm ?'New to Netflix ? SignUp Now' : 'Already have an account ? SignIn Now '}</p>
                
            </form>
        
        
    </div>
  )
}

export default Login