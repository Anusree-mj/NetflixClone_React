import React from 'react'
import { translations } from '../helpers'
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
}

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to={'/'}>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>{translations.netflix}</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to={'/account'}>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <Link to={'/signup'}>
            <button onClick={handleLogout} className='bg-red-600 px-3 py-0.5 rounded cursor-pointer text-white'>
             Logout
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to={'/login'}>
            <button className='text-white pr-4'>Log In</button>
          </Link>
          <Link to={'/signup'}>
            <button className='bg-red-600 px-3 py-0.5 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}

    </div>
  )
}

export default Navbar
