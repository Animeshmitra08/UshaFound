import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo from "../assets/logo/uf.png";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";


const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Causes', href: '/initiatives', current: false },
    // { name: 'Pages', href: '/pages', current: false },
    // { name: 'Blog', href: '/blog', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]
  

const Appbar = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [blur, setBlur] = useState(false);
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useMotionValueEvent(
    scrollY,"change",(latest)=>{
        const previous = scrollY.getPrevious();
        if (latest > previous && latest>627) {
            setHidden(true);
        }else{
            setHidden(false)
        }
        if (latest > previous && latest < 627) {
           setBlur(true);
        }else{
            setBlur(false);
            setIsAuth(false)
        }
    }
)
  

  return (
    <>
    <motion.div
    variants={{
        visible : {
            y:0,
            x:0
        },
        hidden : {
            x:0,
            y:"-100%"
        }
    }}
    animate={hidden ? "hidden" : "visible"}
    transition={{
        duration: 0.35,
        ease:"easeInOut"
    }}
    className={`bg-white sticky ${blur ? "md:bg-opacity-10 md:backdrop-blur-sm" : ""} top-0 w-full shadow-md z-50 overflow-x-hidden important`}
    >
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <>
                    <span className="sr-only">Open main menu</span>
                    <IoClose className="block h-6 w-6" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                    <span className="sr-only">Open main menu</span>
                    <FaBarsStaggered className="block h-6 w-6" aria-hidden="true" />
                    </>
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between pr-3">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-20 w-auto"
                    src={logo}
                    alt="Usha Foundation"
                  />
                </div>

                <div className="hidden md:ml-6 md:flex">
                  <div className="flex items-center space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}                          

                        className={({isActive}) => (isActive ? "bg-[#023047] text-white rounded-md px-3 py-2 text-md font-medium" :"text-gray-950 hover:bg-[#023047bd] hover:text-white rounded-md px-3 py-2 text-md font-medium")}
                        aria-current={item.current ? 'page'  : undefined}                        
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>    
              <div>
                <button className="bg-[#fb8500] py-2 px-4 rounded-md text-white">Donate</button>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">              
                {/* <DisclosureButton> */}
                <div className='w-full flex flex-col'>
                {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}                     

                        className={({isActive}) => (isActive ? "bg-[#023047] text-white rounded-md px-3 py-2 text-md font-medium" :"text-gray-950 hover:bg-[#023047bd] hover:text-white rounded-md px-3 py-2 text-md font-medium")}
                        aria-current={item.current ? 'page'  : undefined}                        
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    </div>                
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
    </motion.div>
    </>
  )
}

export default Appbar