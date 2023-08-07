import React, {useEffect, useRef, useState} from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import logo from '../images/logo.png'
import Image from 'next/image';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleEventsToggle = () => {
        setIsEventsOpen(!isEventsOpen);
    };

    const otherClicks = () =>{
        setIsEventsOpen(false);
    }

    return (
        <nav
            className={`bg-white z-10 px-2 flex justify-between h-16 duration-700 transition-all w-full ${
                hasScrolled ? 'shadow-xl' : ''
            } ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100 sticky top-0'}`}
        >
            <div className="flex">
                <div className="flex items-center text-2xl mr-4 cursor-pointer text-gray-800 font-bold italic">
                    <Link href="/">
                        <Image src={logo} alt={''} width={140}/>
                    </Link>
                </div>
                <ul className="hidden md:flex gap-8 pt-2 font-bold text-gray-800 text-sm">
                    <li onClick={otherClicks} className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>Home</span>
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center" onClick={handleEventsToggle}>
                        <span>Services</span>
                        {isEventsOpen && (
                            <motion.div
                                initial={{y:-100,scale:0, opacity:0}}
                                animate={{y:0, scale: 1,opacity:1, transition:{duration: 0.3}}}
                                className="absolute top-10 -start-5 w-48 bg-white shadow shadow-gray-400 text-sm rounded-xl py-2  mt-2"
                            >
                                <ul className={'flex flex-col'}>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Service-1</li>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Service-2</li>
                                    <li className={'flex items-center justify-center py-2 w-full hover:bg-gray-200 text-md duration-300 transition-all'}>Service-3</li>
                                </ul>
                            </motion.div>
                        )}
                    </li>
                    <li className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>About</span>
                    </li>
                    <li onClick={otherClicks} className="relative hover:underline duration-75 cursor-pointer transition-all flex items-center">
                        <span>Contact us</span>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden md:block">
                    <div className="bg-white hover:bg-gray-800 text-gray-800 border-gray-800 border border-2 hover:text-white font-semibold transition-all transition-300 p-2 rounded-xl flex items-center justify-center cursor-pointer">
                        Get Started!
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="h-10 w-10 p-1 rounded-full flex items-center justify-center cursor-pointer" onClick={handleMobileMenuToggle}>
                        {isMobileMenuOpen ? (
                            <FiX size={30} className="text-gray-800" />
                        ) : (
                            <FiMenu size={30} className="text-gray-800" />
                        )}
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <ul className="pt-10 w-full bg-white text-4xl italic absolute top-16 left-0 w-full h-screen shadow-lg flex flex-col items-center">
                    <li onClick={otherClicks} className="py-4 w-full flex justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>Home</span>
                    </li>
                    <li className="py-4 w-full flex flex-col justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleEventsToggle}>
                        <span>Services</span>
                        {isEventsOpen && (
                            <div className="bg-gray-100 text-sm px-2 py-1 rounded mt-2">
                                <p>Service-1</p>
                                <p>Service-2</p>
                                <p>Service-3</p>
                            </div>
                        )}
                    </li>
                    <li className="py-4 w-full flex flex-col justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>About</span>
                    </li>
                    <li onClick={otherClicks} className="py-4 w-full flex justify-center items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        <span>Contact us</span>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
