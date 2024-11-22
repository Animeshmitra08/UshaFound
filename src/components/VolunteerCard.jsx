import React from 'react'
import { motion } from "framer-motion";


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type:"tween" } },
};

const VolunteerCard = ({img, text1, text2, text3, backgroundColor}) => {

  return (
    <>
    <motion.div 
    variants={cardVariants}
    className={` bg-[${backgroundColor}] w-[20rem] h-[21rem] flex flex-col justify-around items-center transition-all shadow-xl rounded-lg`}>
            <div className="w-[10rem] h-[10rem]">
                <img className="h-full w-full" src={img} alt={img} />
            </div>          
            <div className="flex flex-col items-center">
                <h1 className="font-PT text-xl font-semibold">
                  {text1}
                </h1>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>
        </motion.div>
    </>
  )
}

export default VolunteerCard

// bg-[#8ecae641]