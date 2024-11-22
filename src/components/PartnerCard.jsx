import React from 'react'
import { NavLink } from "react-router-dom";

const PartnerCard = ({text, image}) => {
  return (
    <>
    <NavLink>
        <div className="bg-[#8ecae618] w-[15rem] h-[15rem] shadow-md flex flex-col justify-evenly items-center rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all group">
            <div className="">
                <img src={image} className="w-[4rem] h-[4rem]"/>
            </div>          
            <div>
                <h1 className="font-PT text-xl group-hover:text-[#fb8500]">{text}</h1>
            </div>
        </div>
    </NavLink>
    </>
  )
}

export default PartnerCard