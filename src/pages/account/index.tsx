import React from 'react'
import Navbar from '../../components/navbar'
import ProtectedRoute from "../../components/protectedRoute";
import SavedShows from '../../components/savedShows';

const Account = () => {
  return (
    <ProtectedRoute>
      <Navbar />
      <div className='w-full text-white'>
        <img className=' w-full h-[400px] object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
          <div className='absolute top-[10%] p-4 md:p-4'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
        </div>
        <SavedShows />
      </div>
    </ProtectedRoute>
  )
}

export default Account
