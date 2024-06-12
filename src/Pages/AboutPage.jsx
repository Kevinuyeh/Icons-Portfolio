import React from "react";
import Navbar from "../Components/Navbar";
import Me from "../Assets/IMG-20221216-WA0015.jpg"
import Skills from "../Components/Skills";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import Footer from "../Components/Footer";

function AboutPage() {
    return(
        <div className="w-full bg-black">
            <Navbar />
            
            <h1 className="text-white text-4xl tracking-wider md:text-6xl text-center md:mt-[100px]">About Me</h1>
            <div className="relative p-6">
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="h-0.5 bg-team w-12 mx-auto mb-1"></div> {/* Short line on top */}
                    <div className="h-0.5 bg-team w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
                    <div className="h-0.5 bg-team w-12 mx-auto"></div> {/* Short line on bottom */}
                </div>
            </div>

            <img
             src={Me}
             alt="/img"
             className="rounded-full w-[200px] mx-auto mt-7"
             />
        
        <div className="p-5">
            <p className="text-white tracking-wide text-center mt-5 justify-center mx-auto items-center md:w-[600px]">
                Hi, i'm Kevin Uyeh(Icon), a front-end web developer passionate about creating user-friendly web applications. I was trained and mentored at <span className="text-team font-medium">nHub Foundation</span> and i am currently a freelance web developer. I work with HTML, CSS, Javascript, React and Tailwind CSS. Proficient in Git, GitHub and Agile methodologies, i focus on optimizing website performance and enhance user experience. I'm dedicated to delivering high-quality results and continuosly growing as a developer.
            </p>
        </div>

            <Skills />

                <h1 className="text-4xl md:text-5xl text-white font-medium tracking-wider text-center mt-8">MY EXPERTISE</h1>
                <div className="relative p-6">
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="h-0.5 bg-team w-12 mx-auto mb-1"></div> {/* Short line on top */}
                    <div className="h-0.5 bg-team w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
                    <div className="h-0.5 bg-team w-12 mx-auto"></div> {/* Short line on bottom */}
                </div>
            </div>
            <div className="max-w-[1240px] justify-center grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto mt-8 pb-10">
            <div className="mt-8 flex flex-col items-center justify-center">
                <FaHtml5 className="text-white" size={70} />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center">
                <FaCss3Alt className="text-white" size={70} />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center">
                <IoLogoJavascript className="text-white" size={70} />
            </div>

            <div className="mt-8 md:mt-16 flex flex-col items-center justify-center">
                <FaReact className="text-white" size={70} />
            </div>

            <div className="mt-8 md:mt-16 flex flex-col items-center justify-center">
                <BiLogoTailwindCss className="text-white" size={70} />
            </div>

            <div className="mt-8 md:mt-16 flex flex-col items-center justify-center">
                <FaGithub className="text-white" size={70} />
            </div>
        </div>

            <Footer />
        </div>
    )
}

export default AboutPage