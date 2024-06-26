import React from "react";
// import { IoCodeSlashSharp } from "react-icons/io5";
import Port from '../Assets/Portfolio-4.jpg'
import Img1 from '../Assets/programming.png'
import Img2 from '../Assets/graphic-design.png'

function AboutMe() {
    return(
        <div className="w-full p-4 bg-black">
            <div className="max-w-[1240px] mx-auto gap-8 px-4 grid md:grid-cols-2">
                <img
                 src={Port}
                 alt="/img"
                 className="mx-auto w-[500px] rounded-lg md:mt-[70px] my-2"
                 />

                 <div className="flex flex-col justify-center">
                    <h2>ABOUT ME</h2>
                    <h1 className="text-white text-3xl md:text-5xl">I Use <span className="text-team">Creativity</span> to Satisfy My Clients.</h1>

                    <div className='relative p-2 mt-3'>
                <div className='absolute bottom-0 left-0'>
                    <div className='h-0.5 bg-team w-20 mb-1'></div>
                </div>
                </div>

                <p className="text-white mt-5">Combining innovative design concepts with practical functionality to exceed client expectations, ensuring each project is unique, engaging, and perfectly aligned with their vision and needs.</p>

                <div className="flex items-center justify-center mt-8">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className="flex gap-4 mt-5">
                        <img src={Img1} alt='/img' className='w-[60px] h-[70px] mx-auto rounded-md' />
                        <div className="flex flex-col">
                            <h1 className="text-white text-3xl font-medium">Clean Code</h1>
                            <p className="text-white mt-3">Writing readable, maintainable, and efficient code for seamless project development.</p>
                        </div>
                        </div>

                        <div className="flex gap-4 mt-10 pb-8">
                        <img src={Img2} alt='/img' className='w-[60px] h-[70px]  mx-auto rounded-md' />
                        <div className="flex flex-col">
                            <h1 className="text-white text-3xl font-medium">Modern Design</h1>
                            <p className="text-white mt-3">Implementing contemporary aesthetics and trends to create visually stunning websites.</p>
                        </div>
                        </div>
                    </div>
                </div>
                 </div>
            </div>
        </div>
    )
}

export default AboutMe