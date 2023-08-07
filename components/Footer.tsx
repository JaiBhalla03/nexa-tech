import React, {useEffect} from 'react';
import Image from 'next/image';
import footerImage from '../images/footerImage.jpg';
import footerImage1 from '../images/footerImage1.jpg';
import footerImage2 from '../images/footerImage2.jpg';
import footerImage3 from '../images/footerImage3.jpg';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import {AiOutlineArrowRight} from "react-icons/ai";
import {FaClock, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const footerVariant = {
        visible: {opacity: 1, x: 0, transition: {duration: 1}},
        hidden: {opacity: 0, x:-500}
    }
    const footerVariant1 = {
        visible: {opacity: 1, y:0, transition: {delay: 0.25}},
        hidden: {opacity: 0, y: -200}
    }
    const footerVariant2 = {
        visible: {opacity: 1, y:0, transition: {delay: 0.5}},
        hidden: {opacity: 0, y: -200}
    }
    const footerVariant3 = {
        visible: {opacity: 1, y:0, transition: {delay: 0.75}},
        hidden: {opacity: 0, y: -200}
    }
    const footerVariant4 = {
        visible: {opacity: 1, y:0, transition: {delay: 1}},
        hidden: {opacity: 0, y: -200}
    }
    useEffect(()=>{
        console.log('in view', inView)
        if(inView){
            controls.start("visible");
        }
    }, [controls, inView])
    return (
        <footer id={'contact'} ref={ref} className={'p-2 flex flex-col items-center gap-8 md:p-10 overflow-hidden'}>
            <div className={'flex flex-col gap-8 justify-center items-center'}>
                <h1 className={'text-3xl md:text-6xl italic tracking-tighter text-gray-800'}>Be the part of our team</h1>
                <div className={'flex gap-8'}>
                    <motion.div className={'w-14 h-10 md:w-36 md:h-24 rounded-full relative'}
                                animate={controls}
                                variants={footerVariant1}
                                initial='hidden'
                    >
                      <Image src={footerImage1} alt={''} className={'w-full h-full rounded-full'}/>
                        <div className={'absolute flex flex-col items-center justify-center top-0 h-full w-full rounded-full backdrop-blur-[1px]'}>
                            <div className={'select-none text-3xl md:text-5xl pt-5 font-extrabold text-white flex flex-col items-center justify-center'}>^</div>
                        </div>
                    </motion.div>
                    <motion.div className={'w-14 h-10 md:w-36 md:h-24 rounded-full relative'}
                                animate={controls}
                                variants={footerVariant2}
                                initial='hidden'
                    >
                        <Image src={footerImage2} alt={''} className={'w-full h-full rounded-full'}/>
                        <div className={'absolute flex flex-col items-center justify-center top-0 h-full w-full rounded-full backdrop-blur-[1px]'}>
                            <div className={'select-none text-3xl md:text-6xl pb-5 font-bold text-white flex flex-col items-center justify-center'}>[  ]</div>
                        </div>
                    </motion.div>
                    <motion.div className={'w-14 h-10 md:w-36 md:h-24 flex flex-col items-center justify-center rounded-full bg-gray-300 relative'}
                                animate={controls}
                                variants={footerVariant3}
                                initial='hidden'
                    >
                        <AiOutlineArrowRight className={'text-3xl md:text-6xl font-bold text-white -rotate-45'}/>
                    </motion.div>
                    <motion.div className={'w-14 h-10 md:w-36 md:h-24 rounded-full relative'}
                                animate={controls}
                                variants={footerVariant4}
                                initial='hidden'
                    >
                        <Image src={footerImage3} alt={''} className={'w-full h-full rounded-full'}/>
                        <div className={'absolute flex flex-col items-center justify-center top-0 h-full w-full rounded-full backdrop-blur-[1px]'}>
                            <div className={'select-none text-3xl md:text-6xl pt-5 font-extrabold text-white flex flex-col items-center justify-center'}>*</div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className={'relative w-full h-screen md:h-[600px]'}
                animate={controls}
                variants={footerVariant}
                initial='hidden'
            >
                <Image src={footerImage} alt={''} className={'w-full h-96 h-screen md:h-full object-cover rounded-[20px] md:rounded-[40px]'}/>
                <div className={'absolute top-0 h-full w-full bg-black rounded-[20px] md:rounded-[40px] opacity-[40%]'}>

                </div>
                <div className={'p-6 md:p-10 flex flex-col items-center justify-between absolute top-0 rounded-[40px] backdrop-blur-sm w-full h-full'}>
                    <div className={'text-3xl md:text-4xl md:text-5xl font-normal text-white'}>
                        JOIN NOW
                    </div>
                    <div className={'flex flex-col-reverse md:flex-row justify-around w-full'}>
                        <div className={'w-full md:w-1/2 flex flex-col h-full justify-center'}>
                            <div className="items-center md:items-stretch flex flex-col gap-2 md:gap-6 w-full p-4">
                                <div className="items-center font-thin md:border-b border-white flex text-md md:text-xl text-white gap-1">
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <p>123 Innovation Street, Techville</p>
                                </div>
                                <div className="items-center font-thin md:border-b border-white flex text-md md:text-xl text-white gap-1">
                                    <FaEnvelope className="contact-icon" />
                                    <p>info@nexatech.com</p>
                                </div>
                                <div className="items-center font-thin md:border-b border-white flex text-md md:text-xl text-white gap-1">
                                    <FaPhone className="contact-icon" />
                                    <p>+1 (123) 456-7890</p>
                                </div>
                                <div className="items-center font-thin md:border-b border-white flex text-md md:text-xl text-white gap-1">
                                    <FaClock className="contact-icon" />
                                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                                <div className="items-center font-thin md:border-b border-white flex text-md md:text-xl text-white gap-1">
                                    <FaClock className="contact-icon" />
                                    <p>Sat: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                        <form className={'flex gap-2 items-center flex-col w-full md:w-[70%] justify-around'}>
                            <input className={'focus:outline-none p-1 bg-white bg-opacity-[15%] text-center border border-white rounded-2xl text-white placeholder-white h-10 md:h-16 w-full md:w-3/4'} placeholder={'Your name'} type={'text'}/>
                            <input className={'focus:outline-none p-1 bg-white bg-opacity-[15%] text-center border border-white rounded-2xl text-white placeholder-white h-10 md:h-16 w-full md:w-3/4'} placeholder={'Your email'} type={'text'}/>
                            <input className={'focus:outline-none p-1 bg-white bg-opacity-[15%] text-center border border-white rounded-2xl text-white placeholder-white h-24 md:h-36 w-full md:w-3/4'} placeholder={'Your message'} type={'text'}/>
                            <button className={'hover:-translate-y-1 duration-500 transition-all p-1 h-8 md:h-10 rounded-2xl bg-black text-white w-28'}>Submit</button>
                        </form>
                    </div>
                    <div className={'flex flex-col md:flex-row gap-4 justify-between w-full mx-auto w-11/12 border-t border-white pt-4'}>
                        <div className={'social-icons'}>
                            <a href="#" className="social-icon">
                                <FaTwitter className="icon" />
                            </a>
                            <a href="#" className="social-icon">
                                <FaFacebook className="icon" />
                            </a>
                            <a href="#" className="social-icon">
                                <FaInstagram className="icon" />
                            </a>
                            <a href="#" className="social-icon">
                                <FaEnvelope className="icon" />
                            </a>
                        </div>
                        <div className={'flex justify-between md:justify-normal md:gap-4'}>
                            <div className={'hover:-translate-y-1 duration-500 transition-all cursor-pointer px-1 bg-white font-thin rounded-full h-10 flex items-center'}>
                                Got any Questions?
                            </div>
                            <div className={'hover:-translate-y-1 duration-500 transition-all cursor-pointer px-1 bg-black text-white font-thin rounded-full h-10 flex items-center'}>
                                Contact Us
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="text-center text-gray-500 mt-4">
                <p className="text-lg">
                    &copy; {new Date().getFullYear()} Nexa Tech. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;