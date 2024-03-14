import React, { useState, useEffect } from 'react'
import { MoviesType } from './type'
import axios from 'axios';
import { RowType } from './type';
import Movies from './movies';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai';
import YouTube from 'react-youtube';
import { api_key } from '../requests';

const Row = ({ title, fetchURL, rowId }: RowType[0]) => {
    const [movies, setMovies] = useState<MoviesType>([]);
    const [trailerUrlId, setTrailerUrlId] = useState<null | { key: string }>(null);
    const [showTrailer, setShowTrailer] = useState<boolean>(false);


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowId);
        slider!.scrollLeft = slider!.scrollLeft - 500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowId);
        slider!.scrollLeft = slider!.scrollLeft + 500;
    }

    const opts = {
        height: '490',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovieClick = async (movieId: number) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`);
            if (response.data.results.length !== 0) {
                setTrailerUrlId(response.data.results[0]);
                setShowTrailer(true);
            } else {
                setTrailerUrlId(null);
            }
        } catch (error) {
            console.error('Error fetching trailer:', error);
            setTrailerUrlId(null);
        }
    };

    const handleCloseTrailer = () => {
        setShowTrailer(false); // Hide the trailer
        setTrailerUrlId(null); // Reset trailerUrlId
    };


    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title} </h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

                <div id={'slider' + rowId} className='w-full h-full overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Movies key={id} item={item} handleMovieClick={handleMovieClick} />
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
            {showTrailer && (
                <div>
                    <div className="relative">
                        <button className="bg-white opacity-30 hover:opacity-100 cursor-pointer z-10 absolute top-0 right-0 mr-4 p-2"
                            onClick={handleCloseTrailer}><AiOutlineClose /></button><br /><br />
                    </div>
                    <YouTube videoId={trailerUrlId?.key} opts={opts} />
                </div>
            )}
        </>
    )
}

export default Row;
