import React from 'react'
import { motion } from "framer-motion";

const CauseCard = ({image, title, content}) => {
  return (
    <>
    <motion.a 
    variants={{
        offsets:{opacity:0,y:70},
        onsets:{opacity:1,y:0}
      }}
      initial="offsets"
      whileInView="onsets"
      transition={{
        ease:"easeIn", 
        duration:0.8, 
        }}
      viewport={{once:false}}
    className="max-w-sm flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition-all" href="#">
        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
            <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={image} alt="Card Image"/>
        </div>
        <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800">
            {title}
            </h3>
            <p className="mt-1 text-gray-500">
            {content}
            </p>
        </div>
        <div class="p-4 border-t sm:px-5 bg-[#ffb703]">
            <motion.button 
            whileHover={{
                scale:1.1
            }}
            className="text-center w-full">Donate Now</motion.button>
        </div>
    </motion.a>
    </>
  )
}

export default CauseCard