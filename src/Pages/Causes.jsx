import React from 'react'
import bgImage1 from "../assets/images/abt2.jpg";
// import image2 from "../assets/images/featured-image-5.jpg";
// import image3 from "../assets/images/bill-wegener-LqOO5Ko0zSo-unsplash.jpg";
import themeImage from "../assets/images/theme-icon.png"
import Footer from '../components/Footer';
// import bgImagecontact from "../assets/images/featured-image-3.jpg";
import { NavLink } from 'react-router-dom';

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import InitiativeCard from '../components/InitiativeCard';



import img1 from "../assets/images/healthcare.jpg";
import img2 from "../assets/images/ealderlycare.jpg";
import img3 from "../assets/images/community-development.jpg";


import bgimage1 from "../assets/images/giftbox.png";
import bgimage2 from "../assets/images/charity.png";
import bgimage3 from "../assets/images/zakat.png";
import bgimage4 from "../assets/images/care.png"
import bgimage5 from "../assets/images/people.png"
import bgimage6 from "../assets/images/social-care.png"
import bgimage7 from "../assets/images/abt2.jpg"
import GetInvolved from '../components/GetInvolved';

import { fadeIn } from '../framer_motion/Variant';
import { motion } from 'framer-motion';

const Causes = () => {
  return (
    <>
    <section className="h-56 sm:h-96 relative transition-all" >
        <div className="absolute inset-0 bg-fixed sm:bg-cover sm:bg-center bg-contain bg-no-repeat h-full w-full" style={{ backgroundImage: `url(${bgImage1})` }}></div>
        <div className="flex justify-center items-center text-white bg-black/50 absolute inset-0 ">
            <h1 className="md:text-6xl sm:text-5xl text-3xl font-Caprasimo">Our Initiatives</h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center">
            <div className="container mx-auto relative z-10 text-white w-1/2 sm:w-1/3">
                <ol className="flex items-center justify-center whitespace-nowrap bg-red-500 py-2 rounded-t-md">
                    <li className="inline-flex items-center">                        
                        <NavLink className="flex items-center text-sm" to="/">
                        Home
                        </NavLink>
                        <svg className="shrink-0 mx-2 size-4 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </li>
                    <li className="inline-flex items-center text-sm font-semibold truncate" aria-current="page">
                        Initiatives
                    </li>
                </ol>
            </div>
        </div>
    </section>



    <section id='latest-Cause' className="bg-[#8ecae634] py-14 md:py-20 lg:py-32 overflow-hidden">
    <div className="container mx-auto">
        <div className="text-center flex justify-center flex-wrap mb-[2em]">
          <motion.div           
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("up",0.2)}
          viewport={{ once : false, amount : 0.7}}
          className="flex flex-col justify-center md:w-[41%] px-4">   
            <div className="flex items-center justify-center">
              <img src={themeImage} alt="" />
            </div>         
            <h1 className="font-Playfair font-semibold text-3xl sm:text-5xl mb-4">Initiatives</h1>
            <p className="text-center">At Usha Foundation, we&#39;re committed to making a positive impact in our
            community through various initiatives. Our focus areas include:</p>
          </motion.div>
        </div>

        <div className="py-[2rem] flex flex-col gap-[5.5rem] md:px-[5rem] px-3">

            <motion.div                   
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left",0.2)}
            viewport={{ once : false, amount : 0.7}}
            className="flex justify-between relative">
              <img src={bgimage1} alt="" className="w-32 h-32 opacity-10 absolute top-[25%] right-[10%] -z-10 rotate-12" />
              <img src={bgimage4} alt="" className="w-32 h-32 opacity-10 absolute -top-[20%] -left-[5%] -z-10 rotate-12" />
            <InitiativeCard image={img1} textHeading="Healthcare" 
            textContent1="1. Blood Donations: Organizing regular blood donation camps to support local
              hospitals and patients."
              textContent2="2. Cancer Awareness Programs: Conducting workshops, seminars, and
              screenings to educate people about cancer prevention and early detection."
              textContent3="3. Glaucoma Awareness Programs: Raising awareness about glaucoma
              through free eye check-ups and consultations."
              textContent4="4. Free Medical Camps: Providing access to quality healthcare through regular
              medical camps."/>
            </motion.div>

            <motion.div             
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("right",0.2)}
            viewport={{ once : false, amount : 0.7}}
            className="flex flex-row-reverse relative">
              <img src={bgimage3} alt="" className="w-32 h-32 opacity-10 absolute top-[25%] left-[15%] -z-10 -rotate-12" />
              <img src={bgimage5} alt="" className="w-32 h-32 opacity-10 absolute top-[40%] -right-[8%] -z-10" />
            <InitiativeCard image={img2} textHeading="Elderly Care" 
            textContent1="1. Food Distribution in Old Age Homes: Providing nutritious food to seniors in
              need."
              textContent2="2. Clothes Distribution: Donating essential clothing and personal items to
              elderly individuals."/>
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left",0.2)}
            viewport={{ once : false, amount : 0.7}} 
            className="flex relative">
              <img src={bgimage2} alt="" className="w-32 h-32 opacity-10 absolute top-[25%] -z-10 right-[10%] rotate-12" />
              <img src={bgimage6} alt="" className="w-28 h-28 opacity-10 absolute -bottom-[35%] -left-[5%] -rotate-12 -z-10" />
            <InitiativeCard image={img3} textHeading="Community Development" 
            textContent1="1. Mosquito Net Distribution: Distributing mosquito nets to prevent vector-
              borne diseases."
              textContent2="2. Fruits Distribution to Cancer Patients: Providing fresh fruits to cancer
              patients undergoing treatment."/>
            </motion.div>

            <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("right",0.2)}
            viewport={{ once : false, amount : 0.7}} 
            className="flex flex-row-reverse relative">
              <img src={bgimage1} alt="" className="w-32 h-32 opacity-10 absolute top-[25%] -z-10 left-[10%] -rotate-12" />
              <img src={bgimage6} alt="" className="w-28 h-28 opacity-10 absolute -bottom-[35%] -right-[5%] rotate-12 -z-10" />
            <InitiativeCard image={bgimage7} textHeading="Other Initiatives" 
              textContent1="1. Education Support: Providing scholarships, books, and educational materials
              to underprivileged children."
              textContent2="2. Disaster Relief: Responding to natural disasters with emergency aid and
                support."/>
            </motion.div>

        </div>
      </div>
    </section>





    <GetInvolved/>
    <Footer/>
    </>
  )
}

export default Causes