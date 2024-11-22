import React from 'react'
import Slider from '../components/Slider'
import CauseCard from '../components/CauseCard'
import img1 from "../assets/images/healthcare.jpg";
import img2 from "../assets/images/ealderlycare.jpg";
import img3 from "../assets/images/community-development.jpg";
import Footer from '../components/Footer';
import PartnerCard from '../components/PartnerCard';
import fund from "../assets/images/fundraiser.png";
import blood from "../assets/images/cholesterol.png";
import InitiativeCard from '../components/InitiativeCard';

import bgimage1 from "../assets/images/giftbox.png";
import bgimage2 from "../assets/images/charity.png";
import bgimage3 from "../assets/images/zakat.png";
import bgimage4 from "../assets/images/care.png"
import bgimage5 from "../assets/images/people.png"
import bgimage6 from "../assets/images/social-care.png"
import iconImage from "../assets/images/theme-icon.png"
import aboutimage from "../assets/images/healthcare.jpg";

import { motion } from "framer-motion";
import { NavLink, useNavigate } from 'react-router-dom';
import GetInvolved from '../components/GetInvolved';

import volunteer1 from "../assets/images/man (1).png"
import volunteer2 from "../assets/images/man (4).png";
import volunteer3 from "../assets/images/man (3).png";

import { fadeIn } from "../framer_motion/Variant";


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


const LandingPage = () => {

  const navigate = useNavigate();

  
  return (
    <>
    <Slider/>

    <section className='py-14 lg:py-32 px-4 md:px-0 overflow-hidden'>
      <div className='container mx-auto md:px-[5rem]'>
        <div className="flex lg:flex-row flex-col gap-4 justify-center">
          <motion.div           
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("up",0.2)}
          viewport={{ once : false, amount : 0.7}}
          className="flex flex-col flex-wrap mb-[2em]">
            <div className='flex items-end gap-2 font-Dosis font-semibold mb-2 text-xl'>
              <img src={iconImage} alt="" />
              <h2>We believe what we achieve</h2>
            </div>
            <motion.h1
            className='font-Playfair font-semibold text-3xl sm:text-5xl mb-4'>Warmth & True Support For Needed People</motion.h1>            
            <div className='flex flex-col md:flex-row gap-2'>
              <img src={aboutimage} alt="about_img" className='sm:w-[15rem] rounded-md shadow-xl'/>
              <div className='flex flex-col gap-2 md:ml-5'>
                <p>The Usha Foundation is a non-profit philanthropic body dedicated to uplifting humanity through selfless service. The organization works to improve the lives of the underprivileged, regardless of caste, creed, religion, or background. </p>
                <NavLink to="/about" className="relative font-semibold before:absolute before:left-0 before:bottom-0 before:w-[30px] before:border-b-2 before:border-red-500">Read More</NavLink>
              </div>
            </div>
          </motion.div>


          <motion.div           
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("left",0.2)}
          viewport={{ once : false, amount : 0.7}}
          className="w-full flex justify-center md:justify-end">
            {/* desktop */}
            <div className='hidden md:flex flex-wrap relative w-[25rem] h-[25rem] text-white text-xl font-semibold text-center'>
              <motion.div 
              whileHover={{
                translateX: "-8%",
                translateY:"-8%"
              }}
              transition={{
                ease:"easeIn",
                duration:0.4
              }}
              className="w-[50%] h-[50%] flex items-center justify-center bg-[#F5A93F] shadow-xl p-5">
                <a href="#">
                Take Initiatives
                </a>
              </motion.div>
              <motion.div 
              whileHover={{
                translateX: "8%",
                translateY:"-8%"
              }}
              transition={{
                ease:"easeIn",
                duration:0.4
              }}
              className="w-[50%] h-[50%] flex items-center justify-center bg-[#4CC7D6] shadow-xl p-5">
                <a href="#">Become a genuine Volunteer</a>
              </motion.div>
              <motion.div 
              whileHover={{
                translateX: "-8%",
                translateY:"8%"
              }}
              transition={{
                ease:"easeIn",
                duration:0.4
              }}
              className="w-[50%] h-[50%] flex items-center justify-center bg-[#3E688F] shadow-xl p-5">
                <a href="#">
                  Make a Donation to Achieve
                </a>
              </motion.div>
              <motion.div 
              whileHover={{
                translateX: "8%",
                translateY:"8%"
              }}
              transition={{
                ease:"easeIn",
                duration:0.4
              }}
              className="w-[50%] h-[50%] flex items-center justify-center bg-[#DC4549] shadow-xl p-5">
                <a href="#">Blood Donation Camps</a>
              </motion.div>
              <div className="bg-black/20 w-[5rem] h-[5rem] rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50"></div>
            </div>

            {/* mobile */}
            <div className='flex flex-col md:hidden flex-wrap relative w-full px-2 text-white text-xl font-semibold text-center'>
              <div 
              className="flex items-center justify-center bg-[#F5A93F] shadow-xl p-5">
                <a href="#">
                Take Initiatives
                </a>
              </div>
              <div
              className="flex items-center justify-center bg-[#4CC7D6] shadow-xl p-5">
                <a href="#">Become a genuine Volunteer</a>
              </div>
              <div 
              className="flex items-center justify-center bg-[#3E688F] shadow-xl p-5">
                <a href="#">
                  Make a Donation to Achieve
                </a>
              </div>
              <div 
              className="flex items-center justify-center bg-[#DC4549] shadow-xl p-5">
                <a href="#">Blood Donation Camps</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>



    {/* latest cause */}
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
              <img src={iconImage} alt="" />
            </div>         
            <h1 className="font-Playfair font-semibold text-3xl sm:text-5xl mb-4">Initiatives</h1>
            <p className="text-center">At Usha Foundation, we&#39;re committed to making a positive impact in our
            community through various initiatives. Our focus areas include:</p>
          </motion.div>
        </div>

        <div className="py-[2rem] flex flex-col gap-8 md:px-[5rem] px-3">

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

        </div>
      </div>
    </section>

    <section className="py-14 md:py-20 lg:py-32">
        <motion.div 
        initial="hidden"
        whileInView={"show"}
        variants={fadeIn("up",0.2)}
        viewport={{ once : false, amount : 0.7}}
        className="text-center flex justify-center flex-wrap mb-[2em]">
          <div className="flex flex-col justify-center md:w-[50%] px-4">            
            <h1 className="font-Playfair font-semibold text-3xl sm:text-5xl mb-4">Become a Smiling Partner today & you can help children just like many!</h1>
          </div>
        </motion.div>
        <motion.div         
        initial="hidden"
        whileInView={"show"}
        variants={fadeIn("right",0)}
        viewport={{ once : false, amount : 0.7}}
        className="py-[2rem] flex justify-center flex-wrap">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <PartnerCard text="Fund Raising Projects" image={fund}/>
            <PartnerCard text="Love your World" image={fund}/>
            <PartnerCard text="Save Water & Food" image={blood}/>
          </div>
        </motion.div>
    </section>

    {/* volunteer section------------------------------------------------- */}
    <section className="py-14 md:py-20 lg:py-32">

        <div className="text-center flex justify-center flex-wrap mb-[2em]">
          <motion.div           
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("up",0.2)}
          viewport={{ once : false, amount : 0.7}}
          className="flex flex-col justify-center md:w-[41%] px-4">   
            <div className="flex items-center justify-center">
              <img src={iconImage} alt="icon" />
            </div>         
            <h1 className="font-Playfair font-semibold text-3xl sm:text-5xl mb-4">Meet Our Volunteers</h1>
          </motion.div>
        </div>    

        <div className="py-[2rem] flex justify-center items-center flex-col flex-wrap">
          <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"} 
          className="grid md:grid-cols-3 grid-cols-1 gap-8">            
            <VolunteerCard backgroundColor={"#ffb80338"} img={volunteer1} text1={" Dr. Ashish Mabobia"} text2={"(Doctor/Director)"} text3={"9981517979"}/>
            <VolunteerCard backgroundColor={"#ffb80338"} img={volunteer2} text1={" Mr. Neeraj Purohit"} text2={"(Social Worker)"} text3={"9977254100"}/>
            <VolunteerCard backgroundColor={"#ffb80338"} img={volunteer3} text1={" Mr. Abhinay Singh"} text2={"(School Director)"} text3={"8109804141"}/>
          </motion.div>
          <motion.button 
          initial={{
            opacity:0,
            y:40
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          whileHover={{
            y:-10,
            scale:1.02
          }}
          transition={{
            type: 'tween',
            duration : 1.5,
            ease : [0.25,0.25,0.25,0.75]
          }}
          className="bg-[#FB8500] py-2 px-4 rounded-md text-white mt-8 shadow-md hover:shadow-xl" onClick={()=>navigate("/about/#volunteer")}>Show All</motion.button>
        </div>
    </section>

    <GetInvolved/>

    <Footer/>
    </>
  )
}

export default LandingPage