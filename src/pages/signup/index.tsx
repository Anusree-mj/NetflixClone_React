import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { useAuth } from '../../components/AuthContext';
import { setDoc, doc } from 'firebase/firestore'

const Signup = () => {
    const { updateUser } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                updateUser(user);
                setDoc(doc(db, 'users', email), {
                    savedShows: []
                })
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    return (
        <>
            <Navbar />
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input onChange={(e: React.ChangeEvent<any>): void => {
                                    setEmail(e.target.value);
                                }}
                                    className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' />

                                <input onChange={(e: React.ChangeEvent<any>): void => {
                                    setPassword(e.target.value);
                                }}
                                    className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' />

                                <button className='bg-red-600 py-2 my-6 rounded font-bold'>Sign Up</button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix? </span>
                                    <Link to={'/login'}>
                                        Sign In
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
