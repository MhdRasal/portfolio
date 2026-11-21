import { useState, useCallback, useMemo } from 'react'
import './App.css'
import {SkillDetails, EduDetails} from './Components/Details.jsx'
import TypingAnimation from './Components/TypingAnimation.jsx'
import ProjectsSection from './Components/ProjectsSection.jsx'
import ContactSection from './Components/ContactSection.jsx'
import { motion, AnimatePresence } from 'framer-motion'

import profileImg from './assets/profile.jpg'
import { ReactLenis } from 'lenis/react'
import FloatingParticles from './Components/FloatingParticles.jsx'

function App() {
  const [activeTab, setActiveTab] =  useState('skills');

  // Debounced tab switching for better performance
  const handleTabSwitch = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  // Memoized animation variants for better performance
  const headerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }), []);

  const locationVariants = useMemo(() => ({
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  }), []);

  const socialContainerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delay: 0.2
      }
    }
  }), []);

  const socialItemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }), []);

  const tabContainerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3
      }
    }
  }), []);

  return (
    <ReactLenis root>
      <div id='container' className='bg-[#1d100d] min-h-screen relative text-white'>
      <FloatingParticles />

      {/* Mobile Profile - Only visible on smaller screens */}
      <motion.div
        className='w-full h-fit relative z-10 block lg:hidden motion-div'
      >
        <motion.img
          className='rounded-b-4xl mb-4 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] w-full object-cover max-h-[65vh] object-[center_25%]'
          src={profileImg}
          alt="Muhammed Rasal"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: 'transform' }}
        />
      </motion.div>

      {/* Header */}
      <motion.div
        className='w-full min-h-screen flex flex-col items-center relative z-10 motion-div'
      >
        <div className='text-[#8F9791] font-["Parkinsans",sans-serif] text-start pt-10 w-full max-w-2xl mx-auto px-6 lg:px-8'>

          {/* Desktop Layout - Header with Profile Photo */}
          <div className='lg:flex lg:items-start lg:justify-between'>
            {/* Left side - Main content */}
            <div className='lg:flex-1 '>
              {/* details */}
              <motion.div
                variants={headerVariants}
                initial="hidden"
                animate="visible"
              >
                <TypingAnimation
                  text="Muhammed Rasal"
                  className='text-4xl sm:text-5xl lg:text-6xl text-[#c6c6c6] font-bold mb-2'
                  delay={200}
                />
                <motion.h3
                  className='text-lg lg:text-xl text-cyan-300'
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  Full-Stack AI Product Engineer
                </motion.h3>
              </motion.div>

              {/* location */}
              <motion.div
                className='flex mt-2 lg:mt-4'
                variants={locationVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.svg
                  className='w-[11.5px] h-[15px] text-[#8F9791]'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-label='Location'
                >
                  <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z'/>
                </motion.svg>
                <p className='text-sm lg:text-base pl-1'>India, Kerala</p>
              </motion.div>
            </div>

            {/* Right side - Desktop Profile Photo */}
            <motion.div
              className='hidden lg:block lg:flex-shrink-0'
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                className='relative'
              >
                <motion.img
                  className='w-48 h-48 xl:w-56 xl:h-56 rounded-full object-cover border-4 border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.3)]'
                  src={profileImg}
                  alt="Muhammed Rasal"
                  style={{ willChange: 'transform' }}
                />
                {/* Gradient overlay ring */}
                <div className='absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-sm -z-10'></div>
              </motion.div>
            </motion.div>
          </div>

          {/* socials */}
          <motion.div
            className='flex flex-row mt-5 lg:mt-0'
            variants={socialContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={socialItemVariants}>
              <motion.a
                href="https://www.linkedin.com/in/muhammed-rasal-67624b298"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className='mt-4.5 pt-[px] ml-2 text-blue-400 hover:text-blue-300 transition-colors duration-300' width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d='M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm5-1.775v.5'/>
                  <path d='M8 16.375V10.75m4 5.625V13.5m0 0v-2.75m0 2.75c0-1.288 1.222-2 2.4-2 1.6 0 1.6 1.375 1.6 2.875v2'/>
                </svg>
              </motion.a>
            </motion.div>

            <motion.div variants={socialItemVariants}>
              <motion.a
                href="https://github.com/MhdRasal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className='mt-4.5 pt-[2px] ml-2 invert-70 hover:invert transition-all duration-300' fill="none" height="28" viewBox="0 0 25 25" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M15.7481 24.9471C24.0901 24.7061 24.9111 22.9501 24.9111 12.9811C24.9111 1.98108 23.9111 0.981079 12.9111 0.981079C1.91113 0.981079 0.911133 1.98108 0.911133 12.9811C0.911133 22.9761 1.73713 24.7151 10.1391 24.9491C10.2121 24.8581 10.2391 24.7441 10.2391 24.6281C10.2391 24.3781 10.2291 21.8121 10.2241 20.9291C7.18713 21.5681 6.54613 19.5101 6.54613 19.5101C6.04913 18.2881 5.33313 17.9621 5.33313 17.9621C4.34213 17.3061 5.40813 17.3191 5.40813 17.3191C6.50413 17.3941 7.08113 18.4101 7.08113 18.4101C8.05513 20.0271 9.63713 19.5601 10.2591 19.2891C10.3581 18.6061 10.6401 18.1391 10.9521 17.8751C8.52713 17.6081 5.97813 16.7001 5.97813 12.6451C5.97813 11.4901 6.40413 10.5461 7.10213 9.80608C6.98913 9.53808 6.61513 8.46208 7.20913 7.00608C7.20913 7.00608 8.12613 6.72108 10.2121 8.09008C11.0831 7.85508 12.0171 7.73808 12.9461 7.73408C13.8731 7.73808 14.8071 7.85508 15.6801 8.09008C17.7651 6.72108 18.6801 7.00608 18.6801 7.00608C19.2761 8.46208 18.9011 9.53808 18.7881 9.80608C19.4881 10.5461 19.9111 11.4901 19.9111 12.6451C19.9111 16.7101 17.3581 17.6051 14.9251 17.8661C15.3171 18.1931 15.6661 18.8391 15.6661 19.8261C15.6661 20.7721 15.6601 22.4451 15.6561 23.5541C15.6541 24.1031 15.6531 24.5131 15.6531 24.6281C15.6531 24.7371 15.6821 24.8521 15.7481 24.9471V24.9471Z" fill="black" fillRule="evenodd"/>
                </svg>
              </motion.a>
            </motion.div>

            <motion.div variants={socialItemVariants}>
              <motion.a
                href="https://www.loom.com/share/2a28b321cc164d3a8041e712d249f3a1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch the SocialAgent demo on Loom"
              >
                <svg className='mt-4.5 ml-2 text-purple-400 hover:text-purple-300 transition-colors duration-300' width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M10 8.25 16 12l-6 3.75z"/>
                </svg>
              </motion.a>
            </motion.div>

            <motion.div variants={socialItemVariants}>
              <motion.a
                href="https://tinyswordsweb.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Play Tiny Swords"
              >
                <svg className='mt-4.5 ml-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300' width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d='M6 11h4M8 9v4m7-1h.01M18 10h.01'/>
                  <path d='M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z'/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Skills/Journey */}
          <motion.div
            className='flex w-full justify-around mt-15 border-1 rounded-md overflow-hidden bg-gray-800/20'
            variants={tabContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={`w-full flex flex-col items-center cursor-pointer rounded-md relative overflow-hidden ${activeTab === 'skills' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'hover:bg-gray-700/30'}`}
              onClick={() => handleTabSwitch('skills')}
            >
              <h4 className={`text-lg p-1 relative z-10 transition-colors duration-300 ${activeTab === 'skills' ? 'text-white font-semibold' : 'text-gray-300'}`}>Skills</h4>
            </motion.div>
            <motion.div
              className={`w-full flex flex-col items-center cursor-pointer rounded-md relative overflow-hidden ${activeTab === 'education' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'hover:bg-gray-700/30'}`}
              onClick={() => handleTabSwitch('education')}
            >
              <h4 className={`text-lg p-1 relative z-10 transition-colors duration-300 ${activeTab === 'education' ? 'text-white font-semibold' : 'text-gray-300'}`}>Journey</h4>
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`w-full h-fit mt-2.5 border-1 rounded-md relative mb-6 bg-gray-800/20 border-gray-700/30`}
            >
              {activeTab === 'skills' ? <SkillDetails /> : <EduDetails />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        <ProjectsSection />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        <ContactSection />
      </motion.div>

    </div>
    </ReactLenis>
  )
}

export default App
