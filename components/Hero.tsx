import React from 'react';
import coverImage from '../images/hero1.jpg'
import coverImage1 from '../images/hero2.jpg'
import Image from 'next/image'
import {AiOutlineArrowRight, AiOutlinePlus, AiOutlineSwapRight} from "react-icons/ai";
import {motion} from 'framer-motion';

const Hero = () => {
    return (
        <main className={'pt-5 px-2 md:px-10 text-gray-800'}>
            <div className={'w-full flex flex-col md:flex-row gap-4 md:gap-8'}>
                <div className={'flex flex-col gap-4 md:gap-8 w-full md:w-[70%]'}>
                    <div className={'flex flex-col gap-4'}>
                        <motion.div
                            className={'flex gap-4'}
                            initial={{x: -1000}}
                            animate={{x: 0}}
                            transition={{delay: 1.5}}
                        >
                            <h1 className={'tracking-tighter font-normal text-4xl md:text-6xl italic'}>
                                Embrace Next Tech Innovation
                            </h1>

                        </motion.div>
                    </div>
                    <motion.div className={'relative'}
                                initial={{ x: -500 ,y: -100 , opacity: 0}}
                                animate={{ x: 0, y: 0, opacity: 1, transition: {duration: 1}}}
                                transition={{ type: "spring", stiffness: 100 }}
                    >
                        <Image src={coverImage} alt={''} className={'w-full object-cover h-96 md:h-full rounded-[20px] md:rounded-[40px]'}/>
                        <div className={'absolute flex items-center justify-center bottom-6 end-6 bg-white w-10 h-10 rounded-full cursor-pointer hover:-translate-y-1 duration-500 transition-all'}>
                            <AiOutlineArrowRight size={25} className={'font-bold text-gray-800 -rotate-45'}/>
                        </div>
                        <motion.div
                            className={'bg-opacity-40 absolute bg-white text-md md:text-3xl lg:text-4xl py-2 px-2 md:py-2 lg:py-4 md:px-4 lg:px-6 font-semibold bottom-4 start-4 md:bottom-4 md:start-4 lg:bottom-6 lg:start-6 rounded-[20px] md:rounded-[40px]'}
                            initial={{y: 50, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 1.2}}
                        >
                            Find your dream<br/> job in with <br/>Nexa-Tech Solution.
                        </motion.div>
                    </motion.div>
                </div>
                <div className={'w-full md:w-[30%] flex flex-col gap-4 md:gap-8'}>
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            transition: {duration : 0.3},
                        }}
                        initial={{ x: 500 ,y: -100 , opacity: 0}}
                        animate={{ x: 0, y: 0, opacity: 1, transition: {duration: 1}}}
                        transition={{ type: "spring", stiffness: 100 }}
                        className={'relative h-48 md:h-1/2 w-full bg-gray-300 rounded-[20px] md:rounded-[40px]'}
                    >
                        <div className={'absolute flex items-center justify-center top-6 end-6 bg-white w-10 h-10 rounded-full cursor-pointer hover:-translate-y-1 duration-500 transition-all'}>
                            <AiOutlinePlus size={25} className={'font-bold text-gray-800'}/>
                        </div>
                        <div className={'absolute bottom-6 start-6'}>
                            <p className={'w-2/3 text-xl font-thin'}>Join our blogs</p>
                            <p className={'w-2/3 text-2xl font-bold italic'}>Real talk is the corporate world.</p>
                        </div>
                        <li className={'flex items-center justify-center absolute bg-opacity-30 decoration-1 top-6 start-6 text-black border border-black rounded-full w-16 text-sm'}>
                            ADS
                        </li>
                        <div className={'absolute bottom-6 end-6 underline text-gray-800 flex items-center justify-center font-bold text-sm'}>
                            Learn more
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            transition: {duration : 0.3},
                        }}
                        initial={{ x: 500 ,y: 100 , opacity: 0}}
                        animate={{ x: 0, y: 0, opacity: 1, transition: {duration: 1}}}
                        transition={{ type: "spring", stiffness: 100 }}
                        className={'h-56 md:h-1/2 w-full bg-gray-300 rounded-[20px] md:rounded-[40px] relative'}>
                        <Image src={coverImage1} alt={''} className={'w-full h-full object-cover rounded-[20px] md:rounded-[40px]'}/>
                        <div className={'absolute flex font-bold text-white items-center justify-center top-6 end-6 border border-white w-10 h-10 rounded-full'}>
                            100
                        </div>
                        <div className={'absolute bottom-6 items-center start-1/2 flex gap-1 -translate-x-1/2 bg-white rounded-full p-2 md:p-4 font-bold cursor-pointer hover:-translate-y-1 duration-500 transition-all'}>
                            Sell all picks <AiOutlineSwapRight/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Hero;