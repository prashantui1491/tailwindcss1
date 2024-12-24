import React from 'react'

const Headeritems = ({name, Icon}) =>{
    return(
        <div className='text-white flex items-center gap-8 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
            <Icon/>
            <h2 className=''>{name}</h2>
        </div>
    )
}

export default Headeritems