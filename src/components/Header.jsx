import React, {useState} from "react"
import logo from '../assets/images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import Headeritems from "./Headeritems";
const Header = () => {

    const [toggle, setToggle] = useState(false)

    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]

    //https://api.themoviedb.org/3/movie/550?api_key=b6acc493fce97972767d4b86f321f4ec

    //https://api.themoviedb.org/3/trending/all/day?api_key=b6acc493fce97972767d4b86f321f4ec
    return(
        <div className="flex items-center  justify-between p-5">
            <div className="flex gap-8 items-center">
            <img src={logo} className="w-[80px] md:w-[115px] object-cover"/>
            <div className="hidden md:flex gap-8">
            {menu.map((item)=>(
                <Headeritems name={item?.name} Icon={item?.icon}/>
            ))}
            </div>
            <div className="flex md:hidden gap-8">
            {menu.map((item, index)=> index<3 && (
                <Headeritems name={""} Icon={item?.icon}/>
            ))}
            <div className="md:hidden" onClick = {()=>setToggle(!toggle)}>
                <Headeritems name={""} Icon={HiDotsVertical} />
                {
                    toggle ? 

                    <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-4 py-5">
                    {menu.map((item, index)=> index>2 && (
                    <Headeritems name={item.name} Icon={item?.icon}/>
                ))}
                    </div> : null
                }
               

            </div>
            </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className="w-[40px] rounded-full"/>
        </div>
    )
}

export default Header