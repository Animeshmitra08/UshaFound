import React from 'react'
import bgImage1 from "../assets/images/banner.jpg";
import image2 from "../assets/images/abt1.jpg";
import image3 from "../assets/images/abt2.jpg";
import image4 from "../assets/images/abt3.jpg";
import Footer from '../components/Footer';
import iconImage from "../assets/images/theme-icon.png"
import { NavLink } from 'react-router-dom';
import { fadeIn } from '../framer_motion/Variant';
import { motion } from 'framer-motion';

import volunteer1 from "../assets/images/man (1).png"
import volunteer2 from "../assets/images/man (4).png";
import volunteer3 from "../assets/images/man (3).png";
import volunteer4 from "../assets/images/woman.png";

import volunteer5 from "../assets/images/man (2).png"
import volunteer6 from "../assets/images/man (4).png";
import volunteer7 from "../assets/images/man (3).png";
import volunteer8 from "../assets/images/man (3).png";
import volunteer9 from "../assets/images/man (3).png";

import VolunteerCard from "../components/VolunteerCard";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6, 
      },
    },
  };


const AboutUs = () => {
  return (
    <>
    <motion.section 
    className="h-56 sm:h-96 relative transition-all" >
        <div className="absolute inset-0 bg-fixed sm:bg-cover sm:bg-center bg-contain bg-no-repeat h-full w-full" style={{ backgroundImage: `url(${bgImage1})` }}></div>
        <div className="flex justify-center items-center text-white bg-black/50 absolute inset-0 ">
            <h1 className="md:text-6xl sm:text-5xl text-3xl font-Caprasimo">About Us</h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center">
            <div className="container mx-auto relative z-10 text-white w-1/3">
                <ol className="flex items-center justify-center whitespace-nowrap bg-red-500 py-2 rounded-t-md">
                    <li className="inline-flex items-center">
                        <NavLink className="flex items-center text-sm" to="/">
                        Home
                        </NavLink>
                        <svg className="shrink-0 mx-2 size-4 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </li>
                    <li className="inline-flex items-center text-sm font-semibold truncate" aria-current="page">
                        About
                    </li>
                </ol>
            </div>
        </div>
    </motion.section>


    <section className="bg-[#8ecae634] py-14 md:py-20 lg:py-32 px-4 md:px-[4rem]">
        <div className="flex gap-4 items-center flex-col lg:flex-row container mx-auto md:px-[5rem]">
            <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("up",0.2)}
            >
                <div className="flex items-end gap-2 font-Dosis font-semibold mb-2 text-xl">
                    <img src={iconImage} alt="" />
                    <h1>We believe what we achieve</h1>
                </div>
                <div className="mb-4">
                    <h1 className="font-Dosis text-4xl font-bold mb-2">Warmth & True Support For Needed People</h1>     
                    <p className="font-semibold text-emerald-800">We make ways to good things happen</p>
                </div>           
                <p className="font-PT text-base">
                    Founded on February 23rd, 2010, by Dr. Ashish Mahobia, the Usha Foundation
                    is a non-profit philanthropic body dedicated to uplifting humanity through
                    selfless service. The organization works to improve the lives of the
                    underprivileged, regardless of caste, creed, religion, or background. From
                    setting up nursing homes and orphanages to assisting widows and providing
                    financial support for medical treatment, clothing, and marriage, the Usha
                    Foundation is committed to enhancing the well-being of those in need. Our
                    mission is to spread compassion, empowerment, and care to the most
                    vulnerable members of society.
                </p>
            </motion.div>
            <motion.img 
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left",0.2)}
            src={image2} className="rounded-md shadow-lg w-[28rem]"
            />
        </div>
    </section>

    <section className="py-14 md:py-20 lg:py-32 px-4 md:px-[4rem]">
        <div className="flex md:flex-row-reverse flex-col gap-4 container mx-auto md:px-[5rem]">
            <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left",0.2)}
            >
                <div className="mb-4 text-end">
                    <h1 className="font-Dosis text-4xl font-bold mb-2">Mission</h1>     
                    <p className="font-semibold text-emerald-800">We make ways to good things happen</p>
                </div>     
                <p className="font-PT text-base">
                Our goal is to create a society where every individual, regardless of their
                background, can live with dignity and hope. We strive to provide essential care,
                shelter, and support for the underprivileged, fostering a spirit of philanthropy 
                and service to humanity.
                </p>
            </motion.div>
            <motion.img 
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("right",0.2)}
            src={image3} alt="" className="w-[28rem] rounded-lg shadow-lg" />
        </div>
    </section>

    <section className="bg-[#ffb80321] py-14 md:py-20 lg:py-32 px-4 md:px-[4rem]">
        <div className="flex flex-col md:flex-row gap-4 container mx-auto md:px-[5rem]">
            <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("right",0.2)}>
                <div className="mb-4">
                    <h1 className="font-Dosis text-4xl font-bold mb-2">Vision</h1>     
                    <p className="font-semibold text-emerald-800">We make ways to good things happen</p>
                </div>     
                <p className="font-PT text-base">
                To build a future where compassion knows no bounds and every life touched
                by the Usha Foundation experiences dignity, health, and happiness. We
                envision a world where kindness and care bridge the gap between the
                fortunate and people in need.
                </p>
            </motion.div>
            <motion.img 
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left",0.2)}
            src={image4} alt="" className="w-[28rem] rounded-lg shadow-lg" />
        </div>
    </section>


    <section id="volunteers" className="py-14 md:py-20 lg:py-32">

        <div className="text-center flex justify-center flex-wrap mb-[2em]">
          <motion.div           
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("up",0.2)}
          viewport={{ once : false, amount : 0.7}}
          className="flex flex-col justify-center md:w-[41%] px-4">   
            <div className="flex items-center justify-center">
              <img src={iconImage} alt="" />
            </div>         
            <h1 className="font-Playfair font-semibold text-3xl sm:text-5xl mb-4">Meet Our Volunteers</h1>
          </motion.div>
        </div>    

        <div className="py-[2rem] flex justify-center flex-wrap relative">
        < motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-3 grid-cols-1 gap-8">              
            <VolunteerCard backgroundColor={"#8ecae641"} img={volunteer1} text1={" Dr. Ashish Mabobia"} text2={"(Doctor/Director)"} text3={"9981517979"}/>
            <VolunteerCard backgroundColor={"#ffb80338"} img={volunteer2} text1={" Mr. Neeraj Purohit"} text2={"(Social Worker)"} text3={"9977254100"}/>
            <VolunteerCard backgroundColor={"#8ecae641"} img={volunteer9} text1={" Mr. Abhinay Singh"} text2={"(School Director)"} text3={"8109804141"}/>
            <VolunteerCard img={volunteer4} text1={" Dr. Swati ma'am"} text2={"(Doctor/Director)"} text3={"9755566668"}/>
            <VolunteerCard backgroundColor={"#8ecae641"} img={volunteer4} text1={" Ms. Muskan Mahauth"} text2={"(Business Development Officer)"} text3={"9644402050"}/>
            <VolunteerCard img={volunteer5} text1={" Mr. Ajay Upadhay"} text2={"(Accountant)"} text3={"9644199935"}/>
            <VolunteerCard backgroundColor={"#8ecae641"} img={volunteer7} text1={" Mr. Debasish Nag"} text2={"(Accountant)"} text3={"9644497911"}/>
            <VolunteerCard backgroundColor={"#ffb80338"} img={volunteer1} text1={" Mr. Rakesh Anthony"} text2={"(Public relation officer)"} text3={"9644060999"}/>
            <VolunteerCard backgroundColor={"#8ecae641"} img={volunteer2} text1={" Mr. Rajkuimar Thawait"} text2={"(Supply chain manager)"} text3={"9827977075"}/>
          </motion.div>
        </div>
    </section>

    <Footer/>
    </>
  )
}

export default AboutUs