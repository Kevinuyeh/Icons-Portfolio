import React from 'react'
import { FaAppStore, FaSearch } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
// import { Slide } from "react-awesome-reveal";

function Skills() {
   

    return (
        <div className='w-full bg-dark3 p-4'>
            <div className='max-w-[1240px] mx-auto px-4 grid md:grid-cols-2'>
                {/* <Slide duration={2000} direction='left'> */}
                <div className='md:mt-[150px] flex flex-col justify-center mx-5'>
                <h1 className='text-white text-3xl md:text-5xl font-medium'>What I <span className='text-team '>Do</span>.</h1>
                <div className='relative p-2'>
                <div className='absolute bottom-0 left-0'>
                    <div className='h-0.5 bg-team w-20 mb-1'></div>
                </div>
                </div>
                
                <p className='text-white mt-4'>I design and develop intuitive, responsive web interfaces using modern technologies like React and Tailwind CSS, ensuring seamless user experiences across devices. Let's bring your digital vision to life with engaging and functional web solutions.</p>
                </div>
                   
                <div className='flex items-center justify-center p-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className='bg-gradient-to-b from-black via-dark-green to-dark4 shadow-md rounded-md p-6 flex flex-col m-4 text-white text-center'>
                        <IoCodeSlashSharp size={40} className='mx-auto text-white'/>
                        
                            <h1 className='text-3xl font-medium'>Web Design</h1>
                            <p className='mt-4'>Creating visually appealing, responsive websites tailored to your brand's identity.</p>
                        </div>

                        <div className='bg-black via-dark-green to-dark4 shadow-md rounded-md p-6 flex flex-col m-4 text-white text-center'>
                       
                        <FaSearch size={40} className='mx-auto text-team'/>
                            <h1 className='text-3xl font-medium'>Web Research</h1>
                            <p className='mt-4'>Gathering and analyzing data to inform web strategies and decisions.</p>
                        </div>

                        <div className='bg-black via-dark-green to-dark4 shadow-md rounded-md p-6 flex flex-col m-4 text-white text-center'>
                        <FaPenNib size={40} className='mx-auto text-team'/>
                            <h1 className='text-3xl font-medium'>UI/UX Design</h1>
                            <p className='mt-4'>Designing user-friendly interfaces for an optimal, engaging user experience.</p>
                        </div>

                        <div className='bg-gradient-to-b from-black via-dark-green to-dark4 shadow-md rounded-md p-6 flex flex-col m-4 text-white text-center'>
                        <FaAppStore size={40} className='mx-auto text-white'/>
                            <h1 className='text-3xl font-medium'>App Development</h1>
                            <p className='mt-4'>Developing visually appealing, and user-friendly apps tailored to your brand's identity.</p>
                        </div>
                    </div>
                </div>
                {/* </Slide> */}
            </div>
        </div>
    )
}

export default Skills