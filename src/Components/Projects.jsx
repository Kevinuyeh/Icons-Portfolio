import React from "react";
import Project1 from '../Assets/Project-5.png'
import Project2 from '../Assets/Project-2.png'
import Project3 from '../Assets/Project-3.png'
import Project4 from '../Assets/Project-4.png'
// import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
    return(

    <div className="w-full p-4 bg-dark3 md:pb-[150px]">
            <h1 className="text-white font-bold tracking-wider mx-auto text-center mt-8 text-4xl">
                FEATURED PROJECTS
            </h1>
            <div className="relative p-6">
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="h-0.5 bg-team w-12 mx-auto mb-1"></div> {/* Short line on top */}
                    <div className="h-0.5 bg-team w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
                    <div className="h-0.5 bg-team w-12 mx-auto"></div> {/* Short line on bottom */}
                </div>
            </div>
            <div className="max-w-[1240px] mt-8 py-6 gap-14 justify-center mx-auto grid md:grid-cols-2">
                
                    <div className="flex flex-col justify-center">
                        <div className="bg-black rounded-lg shadow-lg justify-center py-7 px-3 text-center mx-auto">
                            <img
                                src={Project1}
                                alt="Project"
                                className="w-[500px] mx-auto mb-3"
                            />
                            <p className="text-white">Enhance your style today with Afro-Threads fashion.</p>
                        </div>
                        <h1 className="text-white font-medium text-3xl mt-3">Afro-Threads</h1>
                        <a  href='https://new-afro-threads.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <div className="group flex items-center">
  <h2
    className="text-team font-bold tracking-wider text-xl flex items-center 
               transition-all duration-700 ease-in-out group-hover:tracking-[0.3em] group-hover:scale-105"
  >
    View Project
    <FaArrowRight className="ml-2 transition-transform duration-700 group-hover:translate-x-2" />
  </h2>
</div>
                        </a>
                        <div className='relative p-2'>
                            <div className='absolute bottom-0 left-0 flex items-center'>
                                <div className='h-0.5 bg-team w-20 mb-1'></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-black rounded-lg shadow-lg justify-center py-7 px-3 text-center mx-auto">
                            <img
                                src={Project2}
                                alt="Project"
                                className="w-[500px] mx-auto mb-3"
                            />
                            <p className="text-white">Delicious meals delivered to your door, hot and fresh.</p>
                        </div>
                        <h1 className="text-white font-medium text-3xl mt-3">Panny's Logistics</h1>
                        <a  href='https://panny-s-logistics.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <div className="group flex items-center">
  <h2
    className="text-team font-bold tracking-wider text-xl flex items-center 
               transition-all duration-700 ease-in-out group-hover:tracking-[0.3em] group-hover:scale-105"
  >
    View Project
    <FaArrowRight className="ml-2 transition-transform duration-700 group-hover:translate-x-2" />
  </h2>
</div>
                        </a>
                        <div className='relative p-2'>
                            <div className='absolute bottom-0 left-0 flex items-center'>
                                <div className='h-0.5 bg-team w-20 mb-1'></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-black rounded-lg shadow-lg justify-center py-7 px-3 text-center mx-auto">
                            <img
                                src={Project3}
                                alt="Project"
                                className="w-[500px] mx-auto mb-3"
                            />
                            <p className="text-white">Transforming your look with expert styling and personalized care.</p>
                        </div>
                        <h1 className="text-white font-medium text-3xl mt-3">Adis-Glam</h1>
                        <a  href='https://adis-glam-tawny.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <div className="group flex items-center">
  <h2
    className="text-team font-bold tracking-wider text-xl flex items-center 
               transition-all duration-700 ease-in-out group-hover:tracking-[0.3em] group-hover:scale-105"
  >
    View Project
    <FaArrowRight className="ml-2 transition-transform duration-700 group-hover:translate-x-2" />
  </h2>
</div>
                        </a>
                        <div className='relative p-2'>
                            <div className='absolute bottom-0 left-0 flex items-center'>
                                <div className='h-0.5 bg-team w-20 mb-1'></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-black rounded-lg shadow-lg justify-center py-7 px-3 text-center mx-auto">
                            <img
                                src={Project4}
                                alt="Project"
                                className="w-[500px] mx-auto mb-3"
                            />
                            <p className="text-white">Experience luxury and comfort in the heart of the city.</p>
                        </div>
                        <h1 className="text-white font-medium text-3xl mt-3">Grand Hotel & Suites</h1>
                        <a href='https://grand-hotels-suites.vercel.app/' target='_blank' rel='noopener noreferrer'>
                        <div className="group flex items-center">
  <h2
    className="text-team font-bold tracking-wider text-xl flex items-center 
               transition-all duration-700 ease-in-out group-hover:tracking-[0.3em] group-hover:scale-105"
  >
    View Project
    <FaArrowRight className="ml-2 transition-transform duration-700 group-hover:translate-x-2" />
  </h2>
</div>
                    </a>
                        <div className='relative p-2'>
                            <div className='absolute bottom-0 left-0 flex items-center'>
                                <div className='h-0.5 bg-team w-20 mb-1'></div>
                            </div>
                        </div>
                    </div>

                
            </div>
        </div>

    )
}

export default Projects
