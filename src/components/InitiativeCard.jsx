import React from 'react'
// import img1 from "../assets/images/good-4206177_1280.jpg";
// import img2 from "../assets/images/african-2044961_1280.jpg";
// import img3 from "../assets/images/children-6685385_1280.jpg";

import { motion } from "framer-motion";
import { fadeIn } from '../framer_motion/Variant';

const InitiativeCard = ({textHeading, textContent1, textContent2, textContent3, textContent4,image}) => {
  return (
    <>    
    <motion.a           
    href="#" class="flex flex-col bg-white border-b-4 md:border-b-0 md:border-r-4 border-red-300 rounded-lg shadow-lg md:flex-row md:max-w-4xl hover:bg-gray-100">
        <img class="object-cover object-center w-full rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-s-lg" src={image} alt=""/>
        <div class="flex flex-col p-4 leading-normal">
            <h5 class="mb-2 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 font-Playfair">{textHeading}</h5>
            <p class="mb-3 font-normal text-gray-700 ">
                <ol className="flex flex-col gap-1 text-sm md:text-base leading-6">
                    <li>{textContent1}</li>
                    <li>{textContent2}</li>
                    <li>{textContent3}</li>
                    <li>{textContent4}</li>
                </ol>
            </p>
            <button className="bg-[#fb8500] w-fit px-4 py-2 rounded-md text-white">Donate</button>
        </div>
    </motion.a>
    </>
  )
}

export default InitiativeCard