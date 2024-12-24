import React from 'react'
import disney from '../assets/images/disney.png'
import logo from '../assets/images/logo.png'
import marvel from '../assets/images/marvel.png'
import natioalg from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'

import disneyv from '../assets/videos/disney.mp4'
import marvelv from '../assets/videos/marvel.mp4'
import nationalv from '../assets/videos/national-geographic.mp4'
import starwarv from '../assets/videos/star-wars.mp4'
import pixarv from '../assets/videos/pixar.mp4'


export const ProductionHouse = () => {

    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyv
        },
        {
            id:2,
            image:pixar,
            video:pixarv
        },
        {
            id:3,
            image:marvel,
            video:marvelv
        },
        {
            id:4,
            image:starwar,
            video:starwarv
        },
        {
            id:5,
            image:natioalg,
            video:nationalv
        },

    ]
  return (
    <div className='flex gap-5 p-2 px-16'>

        {
            productionHouseList.map((item)=>(
                <div className='border-[2px] border-gray-600 rounded-lg'>
                    <img src={item.image} className='w-full'/>
                </div>
            ))
        }
    </div>
  )
}

export default ProductionHouse
