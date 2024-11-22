// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { motion } from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay, EffectFade, EffectCards } from 'swiper/modules';

import img1 from "../assets/images/slider-1.jpg";
import img2 from "../assets/images/slider-2.jpg";
import img3 from "../assets/images/slider-3.jpg";
import img4 from "../assets/images/slider-4.jpg";
import { useNavigate } from 'react-router-dom';

import { fadeUp } from "../framer_motion/Variant";


export default () => {

  const navigate = useNavigate();

  return (   
    <Swiper
    // Enable modules like Navigation, Pagination, Autoplay
    modules={[ Pagination, Autoplay, EffectFade, EffectCards]}
    effect="Cards"
    spaceBetween={50}
    slidesPerView={1}
    // navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
  >
    <SwiperSlide className="relative">
      <img src={img1} alt="Slide 1" className="lg:h-[90vh] md:h-[75vh] h-[40vh] w-full object-center object-cover"/>
      <div className="absolute inset-0 bg-black/40 flex items-center z-50">     
        <div className="sm:w-[45%] w-[50%] text-white ml-[10%] flex flex-col gap-4 flex-nowrap">

          <motion.h2 
          initial={{
            opacity:0,
            y:-60
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          className="uppercase font-Kaushan_Script text-[#fb8500] md:font-medium text-xs md:text-base">Support the cause that matters</motion.h2>

          <motion.h1           
          initial={{
            opacity:0,
            x:-60
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          className="md:text-7xl text-xl text-white font-Playfair font-bold mb-4">Transforming Lives with Compassion</motion.h1>
          <motion.button 
          initial={{
            opacity:0,
            y:60
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          onClick={()=>navigate("/contact")} className="bg-[#fb8500] md:px-6 md:py-4 px-3 py-2 rounded-md w-fit font-Dosis cursor-pointer uppercase shadow-md font-semibold text-xs">Get Involved</motion.button>
        </div>   
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <img src={img2} alt="Slide 2" className="lg:h-[90vh] md:h-[75vh] h-[40vh] w-full object-center object-cover"/>
      <div className="absolute inset-0 bg-black/40 flex items-center z-50">     
        <div className="sm:w-[45%] w-[50%] text-white ml-[10%] flex flex-col gap-4 flex-nowrap">
          <motion.h2 
          initial={{
            opacity:0,
            y:-60
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          className="uppercase font-Kaushan_Script text-[#fb8500] md:font-medium text-xs md:text-base ">Support the cause that matters</motion.h2>
          <motion.h1 
          initial={{
            opacity:0,
            x:-60
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          className="md:text-7xl text-xl text-white font-Playfair font-bold mb-4">Uplifting Humanity through Care
            <br/>
            <span className="md:text-3xl text-xs font-thin md:font-semibold font-Kaushan_Script">—Support Our Mission to Bring Dignity to Every Life</span>
          </motion.h1>
          <motion.button 
          initial={{
            opacity:0,
            y:60
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          onClick={()=>navigate("/contact")} className="bg-[#fb8500] md:px-6 md:py-4 px-3 py-2 rounded-md w-fit font-Dosis uppercase shadow-md font-semibold text-xs">Get Involved</motion.button>
        </div>   
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <img src={img3} alt="Slide 3" className="lg:h-[90vh] md:h-[75vh] h-[40vh] w-full object-center object-cover"/>
      <div className="absolute inset-0 bg-black/40 flex items-center z-50">     
        <div className="sm:w-[45%] w-[50%] text-white ml-[10%] flex flex-col gap-4 flex-nowrap">
          <motion.h2 
          initial={{
            opacity:0,
            y:-60
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          className="uppercase font-Kaushan_Script text-[#fb8500] md:font-medium text-xs md:text-base">Support the cause that matters</motion.h2>
          <motion.h1 
          initial={{
            opacity:0,
            x:-60
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          className="md:text-7xl text-xl text-white font-Playfair font-bold mb-4">Restoring Hope</motion.h1>
          <motion.button 
          initial={{
            opacity:0,
            y:60
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          onClick={()=>navigate("/contact")} className="bg-[#fb8500] md:px-6 md:py-4 px-3 py-2 rounded-md w-fit font-Dosis cursor-pointer uppercase shadow-md font-semibold text-xs">Get Involved</motion.button>
        </div>   
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <img src={img4} alt="Slide 3" className="lg:h-[90vh] md:h-[75vh] h-[40vh] w-full object-center object-cover"/>
      <div className="absolute inset-0 bg-black/40 flex items-center z-50">     
        <div className="sm:w-[45%] w-[50%] text-white ml-[10%] flex flex-col gap-4 flex-nowrap">
          <motion.h2 
          initial={{
            opacity:0,
            y:-60
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          className="uppercase font-Kaushan_Script text-[#fb8500] md:font-medium text-xs md:text-base">Support the cause that matters</motion.h2>
          <motion.h1 
          initial={{
            opacity:0,
            x:-60
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          className="md:text-7xl text-xl text-white font-Playfair font-bold mb-4">Empowering Women to Thrive
            <br/>        
          <span className="md:text-3xl text-xs font-Kaushan_Script">—Together We Build a Brighter Tomorrow</span>
          </motion.h1>
          <motion.button 
          initial={{
            opacity:0,
            y:60
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:2
          }}
          onClick={()=>navigate("/contact")} className="bg-[#fb8500] md:px-6 md:py-4 px-3 py-2 rounded-md w-fit font-Dosis cursor-pointer uppercase shadow-md font-semibold text-xs">Get Involved</motion.button>
        </div>   
      </div>
    </SwiperSlide>
  </Swiper>
  );
};