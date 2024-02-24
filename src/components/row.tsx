import React, { useState, useEffect } from 'react'
import { MoviesType } from './type'
import axios from 'axios';
import { RowType } from './type';
import Movies from './movies';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


const Row = ({ title, fetchURL, rowId }: RowType[0]) => {
    const [movies, setMovies] = useState<MoviesType>([]);

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


    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title} </h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

                <div id={'slider' + rowId} className='w-full h-full overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Movies key={id} item={item} />
                    ))}
                </div>

                <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
        </>
    )
}

export default Row;
