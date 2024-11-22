import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import themeImage from "../assets/images/theme-icon.png"
import bgImage1 from "../assets/images/community-development.jpg";
import { fadeIn } from '../framer_motion/Variant';
import { motion } from 'framer-motion';

const GetInvolved = () => {
  return (
    <>
    <section className="py-14 md:py-20 lg:py-32 px-4 relative h-[70vh]">        
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full" style={{ backgroundImage: `url(${bgImage1})` }}></div>
        <div className="flex flex-col justify-center items-center absolute inset-0 bg-[#219dbce1] text-white">
            <motion.div 
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("up",0.2)}
            className="flex flex-col justify-center items-center text-center md:w-[70%] px-4">         
                <img src={themeImage} alt="" className='w-[2.2rem] mb-4'/>   
                <h1 className="uppercase font-Playfair font-bold text-3xl sm:text-5xl mb-4">Get Involved</h1>
                <h2 className="uppercase font-Dosis text-xl sm:text-3xl mb-4">We help thousands of children, arrange food & building houses!</h2>
                <p>Join us in making a difference! Volunteer, donate, or partner with us to
                support our initiatives.</p>
            </motion.div>
          
            <motion.div 
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("down",0.2)}
            className='my-4'>
                <ul className=" text-xl flex gap-6 flex-col sm:flex-row">
                    <li className="flex items-center gap-2"><FaPhoneAlt/> <a href="tel:812-070-3692">Phone 9644402050</a></li>
                    <li className="flex items-center gap-2"><IoIosMailOpen/> <a href="mailto:donations@example.org"> ushafoundation45@gmail.com</a></li>
                </ul>
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("right",0.2)}
            className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-6'>
                <button className="bg-[#fb8500] px-6 py-3 rounded-md w-[15rem] uppercase">Start FundRaising</button>
                <button className="bg-[#DC4549] px-6 py-3 rounded-md w-[15rem] uppercase">Join Us</button>
            </motion.div>
        </div>
    </section>
    </>
  )
}

export default GetInvolved