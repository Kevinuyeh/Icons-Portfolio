import React from "react";
import Project1 from '../Assets/Project-1.png'
import Project2 from '../Assets/Project-2.png'
import Project3 from '../Assets/Project-3.png'
import Project4 from '../Assets/Project-4.png'
// import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
    return(
    //     <div className="w-full p-4 bg-dark3">
    //         <h1 className="text-white font-bold tracking-wider mx-auto text-center mt-8 text-4xl ">FEATURED PROJECTS</h1>
    //         <div className="relative p-6"> 
    //     <div className="absolute bottom-0 left-0 w-full">
    //       <div className="h-0.5 bg-team w-12 mx-auto mb-1"></div> {/* Short line on top */}
    //       <div className="h-0.5 bg-team w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
    //       <div className="h-0.5 bg-team w-12 mx-auto"></div> {/* Short line on bottom */}
    //     </div>
    //   </div>
    //         <div className="max-w-[1240px] mt-8 py-6 gap-8  justify-center mx-auto grid md:grid-cols-2">
    //             <div className="flex flex-col justify-center">
    //             <div className="bg-black rounded-lg shadow-lg justify-center py-7 px-3 text-center mx-auto">
    //                 <img
    //                  src={Project1}
    //                  alt="/img"
    //                  className="w-[500px] mx-auto mb-3"
    //                  />
    //                  <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam sed similique quisquam nobis magnam  text-center mx-autosuscipit deserunt.</p>
    //             </div>
    //             <h1 className="text-white font-medium text-3xl mt-3">StarFire Invest</h1>
    //             <Link to='/'><h2 className="text-team text-bold tracking-wider text-xl">View Project</h2></Link>
    //              <div className='relative p-2'>
    //             <div className='absolute bottom-0 left-0'>
    //                 <div className='h-0.5 bg-team w-20 mb-1'></div>
    //             </div>
    //             </div>
    //             </div>

    //             <div className="flex flex-col justify-center">
    //             <div className="bg-black rounded-lg shadow-lg justify-center py-7 px-3 text-center mx-auto">
    //                 <img
    //                  src={Project2}
    //                  alt="/img"
    //                  className="w-[500px] mx-auto mb-3"
    //                  />
    //                  <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam sed similique quisquam nobis magnam suscipit deserunt.</p>
    //             </div>
    //             <h1 className="text-white font-medium text-3xl mt-3">Panny's Logistics</h1>
    //             <Link to='/'><h2 className="text-team text-bold tracking-wider text-xl">View Project</h2></Link>
    //              <div className='relative p-2'>
    //             <div className='absolute bottom-0 left-0'>
    //                 <div className='h-0.5 bg-team w-20 mb-1'></div>
    //             </div>
    //             </div>
    //             </div>

    //             <div className="flex flex-col justify-center">
    //             <div className="bg-black rounded-lg shadow-lg justify-center text-center mx-auto py-7 px-3">
    //                 <img
    //                  src={Project3}
    //                  alt="/img"
    //                  className="w-[500px] mx-auto mb-3"
    //                  />
    //                  <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam sed similique quisquam nobis magnam suscipit deserunt.</p>
    //             </div>
    //             <h1 className="text-white font-medium text-3xl mt-3">Grand Hotels & Suites</h1>
    //             <Link to='/'><h2 className="text-team text-bold tracking-wider text-xl">View Project</h2></Link>
    //              <div className='relative p-2'>
    //             <div className='absolute bottom-0 left-0'>
    //                 <div className='h-0.5 bg-team w-20 mb-1'></div>
    //             </div>
    //             </div>
    //             </div>

    //             <div className="flex flex-col justify-center">
    //             <div className="bg-black rounded-lg shadow-lg justify-center text-center mx-auto py-7 px-3">
    //                 <img
    //                  src={Project4}
    //                  alt="/img"
    //                  className="w-[500px] mx-auto mb-3"
    //                  />
    //                  <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam sed similique quisquam nobis magnam suscipit deserunt.</p>
    //             </div>
    //             <h1 className="text-white font-medium text-3xl mt-3">Adis-Glam</h1>
    //             <Link to='/'><h2 className="text-team text-bold tracking-wider text-xl">View Project</h2></Link>
    //              <div className='relative p-2'>
    //             <div className='absolute bottom-0 left-0'>
    //                 <div className='h-0.5 bg-team w-20 mb-1'></div>
    //             </div>
    //             </div>
    //             </div>
    //         </div>
    //     </div>



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
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam sed similique quisquam nobis magnam suscipit deserunt.</p>
                        </div>
                        <h1 className="text-white font-medium text-3xl mt-3">StarFire Invest</h1>
                        <a  href='https://www.starfireinvest.org/' target='_blank' rel='noopener noreferrer'>
                            <h2 className="text-team text-bold tracking-wider text-xl flex items-center">
                                View Project
                                <FaArrowRight className="ml-2" />
                            </h2>
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
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam sed similique quisquam nobis magnam suscipit deserunt.</p>
                        </div>
                        <h1 className="text-white font-medium text-3xl mt-3">Panny's Logistics</h1>
                        <a  href='https://panny-s-logistics.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <h2 className="text-team text-bold tracking-wider text-xl flex items-center">
                                View Project
                                <FaArrowRight className="ml-2" />
                            </h2>
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
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam sed similique quisquam nobis magnam suscipit deserunt.</p>
                        </div>
                        <h1 className="text-white font-medium text-3xl mt-3">Adis-Glam</h1>
                        <a  href='https://adis-glam-tawny.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <h2 className="text-team text-bold tracking-wider text-xl flex items-center">
                                View Project
                                <FaArrowRight className="ml-2" />
                            </h2>
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
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam sed similique quisquam nobis magnam suscipit deserunt.</p>
                        </div>
                        <h1 className="text-white font-medium text-3xl mt-3">Grand Hotels & Suites</h1>
                        <a href='https://grand-hotels-suites.vercel.app/' target='_blank' rel='noopener noreferrer'>
                        <h2 className="text-team text-bold tracking-wider text-xl flex items-center">
                            View Project
                            <FaArrowRight className="ml-2" />
                        </h2>
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