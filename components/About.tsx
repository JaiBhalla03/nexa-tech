import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AiOutlineSwapRight } from 'react-icons/ai';

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const NewFeedsHeadingVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
        hidden: { opacity: 0, x: 500 },
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const aboutDescription = `
        At Nexa Tech, we are at the forefront of technological innovation, dedicated to shaping the future of businesses worldwide. Established with a vision to empower organizations with cutting-edge solutions, we specialize in a wide range of transformative technologies.

        Our team of experts is passionate about driving digital transformation that revolutionizes operations, enhances efficiency, and unlocks new possibilities. We collaborate closely with businesses to design tailored strategies, leveraging state-of-the-art tools and methodologies.

        As leaders in AI consulting, we bring artificial intelligence out of the realm of science fiction and into practical applications. We help businesses harness the power of AI to gain valuable insights from data, automate processes, and make informed, data-driven decisions.

        Cybersecurity is at the core of our commitment to safeguarding digital landscapes. In an era of increasing cyber threats, we provide robust security solutions that defend against evolving risks, ensuring the confidentiality, integrity, and availability of critical data.

        Our journey is driven by the belief that technology can propel businesses to new heights. With an unwavering focus on innovation, quality, and client success, Nexa Tech is your partner in navigating the ever-evolving tech landscape.

        Join us on this exciting journey as we continue to shape the world of technology and empower businesses to thrive in the digital age.
    `;

    return (
        <div id={'about'} ref={ref} className={'mt-10 md:mt-16 px-2 md:px-10 text-gray-800'}>
            <motion.div
                className="flex flex-col justify-center"
                animate={controls}
                variants={NewFeedsHeadingVariants}
                initial="hidden"
            >
                <div className={'flex gap-2 md:gap-4'}>
                    <h1 className="tracking-tighter italic text-4xl md:text-6xl font-normal">About</h1>
                </div>
            </motion.div>
            <motion.div
                className={'mt-10'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
            >
                <p className={'text-lg leading-7'}>
                    {aboutDescription}
                </p>
            </motion.div>
            <motion.div
                className={'mt-10 flex items-center justify-center'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
            >
                <AiOutlineSwapRight size={30} className={'text-gray-800'} />
            </motion.div>
        </div>
    );
};

export default About;

