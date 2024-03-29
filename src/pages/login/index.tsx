import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            navigate("/");
            console.log(user);
            setError('');
        } catch (error) {
            console.log(error);
            setError("Invalid email or password !");
        }
    };


    return (
        <>
            <Navbar />
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                alt="/" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Log In</h1>
                            {error ? <p className='p-1 text-red-600 bg-white bg-opacity-15 my-2'>{error}</p> : null}

                            <form onSubmit={onLogin} className='w-full flex flex-col py-4'>
                                <input onChange={(e: React.ChangeEvent<any>): void => {
                                    setEmail(e.target.value);
                                }}
                                    className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' />
                                <input onChange={(e: React.ChangeEvent<any>): void => {
                                    setPassword(e.target.value);
                                }}
                                    className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' />
                                <button className='bg-red-600 py-2 my-6 rounded font-bold'>Log In</button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'><span className='text-gray-600'>New to Netflix? </span>
                                    <Link to={'/signup'}>
                                        Sign Up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

export default Login
