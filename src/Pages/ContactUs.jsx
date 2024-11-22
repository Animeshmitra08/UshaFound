import React from 'react'
import bgImage1 from "../assets/images/abt2.jpg";


import image2 from "../assets/images/fundraiser.png";
import image3 from "../assets/images/social-care.png";
import image4 from "../assets/images/care.png";
import image5 from "../assets/images/social-care.png";


import bgimage2 from "../assets/images/theme-icon.png"
import Footer from '../components/Footer';
import bgImagecontact from "../assets/images/featured-image-3.jpg";
import { NavLink } from 'react-router-dom';

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import GetInvolved from '../components/GetInvolved';
import { motion } from 'framer-motion';
import { fadeIn } from '../framer_motion/Variant';

const ContactUs = () => {
  return (
    <>
    <section className="h-56 sm:h-96 relative transition-all" >
        <div className="absolute inset-0 bg-fixed sm:bg-cover sm:bg-center bg-contain bg-no-repeat h-full w-full" style={{ backgroundImage: `url(${bgImage1})` }}></div>
        <div className="flex justify-center items-center text-white bg-black/50 absolute inset-0 ">
            <h1 className="md:text-6xl sm:text-5xl text-3xl font-Caprasimo">Contact Us</h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center">
            <div className="container mx-auto relative z-10 text-white w-1/2 sm:w-1/3">
                <ol className="flex items-center justify-center whitespace-nowrap bg-red-500 py-2 rounded-t-md">
                    <li className="inline-flex items-center">                        
                        <NavLink className="flex items-center text-sm" to="/">
                        Home
                        </NavLink>
                        <svg className="shrink-0 mx-2 size-4 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </li>
                    <li className="inline-flex items-center text-sm font-semibold truncate" aria-current="page">
                        Contact Us
                    </li>
                </ol>
            </div>
        </div>
    </section>



    <section className="py-14 md:py-20 lg:py-32 overflow-hidden px-4">
        <motion.div 
        initial="hidden"
        whileInView={"show"}
        variants={fadeIn("up",0.2)}
        className="flex flex-col items-center justify-center gap-2 mb-[4rem]">
            <div className="mb-2">
                <img src={bgimage2} alt="" />
            </div>
            <h1 className="font-Playfair font-semibold text-3xl sm:text-5xl mb-3">Spread The Love & Get Involved!</h1>
            <p className="text-xs sm:text-sm font-Kaushan_Script">Join Us To Save The World Of Humanitarian And Feel Happy To Support</p>
        </motion.div>

        <div className="flex lg:flex-row flex-col-reverse">            
            <motion.div 
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left",0.2)}
            className='flex justify-center'>
                <img src={bgImagecontact} alt="" />
            </motion.div>
            <motion.div                 
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("right",0.2)}
            className="flex-1 flex flex-col mb-[3rem] lg:mb-0">
                <h1 className="text-lg sm:text-2xl font-Playfair font-semibold">Working Together To Make A Difference</h1>
                <form method="" action="#" id="contact-form" className="mt-[3rem] px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                                    
                        <div className="flex flex-col gap-2">
                            <div className="sm:text-lg text-base font-Playfair italic">Your Name</div>
                            <input type="text" name="username" placeholder="" required className="p-3 border-2 rounded-md "/>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <div className="sm:text-lg text-base font-Playfair italic">Email</div>
                            <input type="email" name="email" placeholder="" required className="p-3 border-2 rounded-md"/>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="sm:text-lg text-base font-Playfair italic">Phone</div>
                            <input type="text" name="phone" placeholder="" required className="p-3 border-2 rounded-md"/>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="sm:text-lg text-base font-Playfair italic">How we can help?</div>
                            <input type="text" name="subject" placeholder="" required className="p-3 border-2 rounded-md"/>
                        </div>

                        <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                            <div className="sm:text-lg text-base font-Playfair italic">Message</div>
                            <textarea name="message" className="p-3 border-2 rounded-md" rows={4} placeholder="Write your message"></textarea>
                        </div>

                        <div className="">
                            <button className="bg-[#fb8500] px-6 py-3 sm:px-10 sm:py-4 rounded-md text-white shadow-md" type="submit" name="submit-form"><span className="btn-title">Send Message</span></button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </div>
    </section>

    <section className='py-14 md:py-20 lg:py-32 overflow-hidden px-4 flex justify-center relative'>
        <img src={image3} alt="" className="w-[4rem] h-[4rem] absolute top-0 opacity-35"/>
        <img src={image2} alt="" className="w-[6rem] h-[6rem] absolute lg:left-[20rem]  md:left-[5rem] hidden md:block top-1/2 opacity-35"/>
        <img src={image4} alt="" className="w-[7rem] h-[7rem] absolute lg:right-[20rem] md:right-[5rem] hidden md:block top-1/2 opacity-35"/>
        <motion.div         
        initial="hidden"
        whileInView={"show"}
        variants={fadeIn("right",0.2)}
        className="bg-[#023047f8] flex flex-col gap-2 text-white lg:w-1/3 mt-10 md:mt-0 rounded-lg p-[3rem] shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Usha Foundation</h3>
            <ul className="flex flex-col mb-4 gap-3 font-medium">
                <li className="flex items-center gap-4"><FaLocationDot/> C/O Sai Baba Nursing Home, New Rajendra Nagar, Raipur (C.G.)</li>
                <li className="flex items-center gap-4"><FaPhoneAlt/> <a href="tel:9644402050">Phone 9644402050</a></li>
                <li className="flex items-center gap-4"><IoIosMailOpen/> <a href="mailto:ushafoundation45@gmail.com"> ushafoundation45@gmail.com</a></li>
            </ul>
            <ul className="flex gap-4 text-2xl">
                <li><a href="#"><FaFacebook/></a></li>
                <li><a href="#"><FaTwitter/></a></li>
                <li><a href="#"><FaInstagram/></a></li>
                <li><a href="#"><FaYoutube/></a></li>
            </ul>
        </motion.div>
    </section>

    {/* <section className="py-14 md:py-20 lg:py-32 px-4 relative h-[70vh]">        
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full" style={{ backgroundImage: `url(${bgImage1})` }}></div>
        <div className="flex flex-col justify-center items-center absolute inset-0 bg-[#219dbce1] text-white">
            <div className="flex flex-col justify-center items-center text-center md:w-[70%] px-4">         
                <img src={bgimage2} alt="" className='w-[2.2rem] mb-4'/>   
                <h1 className="uppercase font-Dosis text-3xl sm:text-5xl mb-4">We help thousands of children, arrange food & building houses!</h1>
                <p>Raise money for charity and personal causes Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquau ut enim ad lorea veniam.</p>
            </div>
          
            <div className='my-4'>
                <ul className="info clearfix text-xl flex gap-4">
                    <li className="flex items-center gap-4"><FaPhoneAlt/> <a href="tel:812-070-3692">Phone 812-070-3692</a></li>
                    <li className="flex items-center gap-4"><IoIosMailOpen/> <a href="mailto:donations@example.org">donations@example.org</a></li>
                </ul>
            </div>
            <div>
                <button className="bg-[#fb8500] px-6 py-3 rounded-md">Start FundRaising</button>
            </div>
        </div>
    </section> */}
    <GetInvolved/>
    <Footer/>
    </>
  )
}

export default ContactUs