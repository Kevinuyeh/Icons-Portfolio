import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

function Skills() {
    return (
        <div className='w-full bg-dark3 p-4'>
            <div className='max-w-[1240px] mx-auto px-4 grid md:grid-cols-2'>
                <Slide duration={3000} direction='left'>
                <div className='md:mt-[150px] flex flex-col justify-center mx-5'>
                <h1 className='text-white text-3xl md:text-5xl font-medium'>What I <span className='text-team '>Do</span>.</h1>
                <div className='relative p-2'>
                <div className='absolute bottom-0 left-0'>
                    <div className='h-0.5 bg-team w-20 mb-1'></div>
                </div>
                </div>
                
                <p className='text-white mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ipsa quasi voluptatum, porro a ipsum soluta adipisci odit, laborum amet mollitia. Quia voluptatem pariatur non perspiciatis optio dolore modi error.</p>
                </div>
                </Slide>
            <Slide duration={3000} direction='right'>    
                <div className='flex items-center justify-center p-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className='bg-gradient-to-b from-black via-dark-green to-dark4 shadow-md rounded-md p-6 flex flex-col m-4 text-white text-center'>
                        <IoCodeSlashSharp size={40} className='mx-auto text-white'/>
                        
                            <h1 className='text-3xl font-medium'>Web Design</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>

                        <div className='bg-black via-dark-green to-dark4 shadow-md rounded-md p-6 flex flex-col m-4 text-white text-center'>
                       
                        <FaSearch size={40} className='mx-auto text-team'/>
                            <h1 className='text-3xl font-medium'>Web Research</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className='bg-black via-dark-green to-dark4 shadow-md rounded-md p-6 flex flex-col m-4 text-white text-center'>
                        <FaPenNib size={40} className='mx-auto text-team'/>
                            <h1 className='text-3xl font-medium'>UI/UX Design</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className='bg-gradient-to-b from-black via-dark-green to-dark4 shadow-md rounded-md p-6 flex flex-col m-4 text-white text-center'>
                        <FaRegChartBar size={40} className='mx-auto text-white'/>
                            <h1 className='text-3xl font-medium'>Marketing</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                </Slide>
            </div>
        </div>
    )
}

export default Skills