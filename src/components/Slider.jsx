import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth

export const Slider = () => {

    const [movieList, setMovieList] = useState([])
    const elementRef = useRef()

    useEffect(() => {

        getTrendingVideos()

    }, [])

    const getTrendingVideos = () => {
        GlobalApi.getTrendingVideos.then((respo => {
            //console.log(respo.data.results)
            setMovieList(respo?.data?.results)
        }))
    }

    const sliderRight = (element) => {
        console.log("clciked")
        if (element) element.scrollLeft += screenWidth - 110
    }

    const sliderLeft = (element) => {
        if (element) element.scrollLeft -= screenWidth - 110
    }


    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'
                onClick={() => sliderLeft(elementRef?.current)}

            />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'
                onClick={() => sliderRight(elementRef?.current)}

            />

            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
                {
                    movieList.map((item, indes) => (
                        <img src={IMAGE_BASE_URL + item?.backdrop_path}
                            className='min-w-full md:h-[310px] object-cover 
                            object-left-top mr-5 rounded-md hover:border-[4px] border-gar-400 transition-all duration-100 ease-in-out'
                        />
                    ))
                }
            </div>
        </div>
    )
}


export default Slider