import React from 'react'
import SavedShows from '../components/SavedShows'
//import SavedShows from '../components/SavedShows'
const Account = () => {
  return (
   <>
   <div className='w-full text-white'>
   
<img 
    className='w-full h-[400px] object-cover' 
    src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
    alt="/" 
    />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
        
   </div>
   <SavedShows />
   </>
  )
}

export default Account
