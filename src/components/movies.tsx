import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { MoviesType } from './type'
import { useAuth } from './AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

interface MoviesProps {
    item: MoviesType[0];
    handleMovieClick: (movieId: number) => void;
}

const Movies = ({ item, handleMovieClick }: MoviesProps) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = useAuth();
    const movieId = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like);
            setSaved(true)
            await updateDoc(movieId, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
        } else {
            alert("Please log in to save a movie")
        }
    }

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'onClick={() => handleMovieClick(item.id)}>{item?.title}
                </p>
                <p onClick={saveShow}>
                    {like ? <FaHeart className='absolute top-2.5 right-3.5 text-gray-300' /> : <FaRegHeart className='absolute top-2.5 right-3.5 text-gray-300' />}
                </p>
            </div>
        </div>
    )
}

export default Movies
