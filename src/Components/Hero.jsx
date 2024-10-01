import React from "react";
import Dev from '../Assets/Portfolio-3.png'
import TypeEffect from "./TypeEffect";

function Hero() {
    const handlePdfButton = () => {
        window.open('/OfficialResume.pdf', '_blank')
    };

    return(
        <div className="w-full bg-black p-4 mt-20">
            <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-2">

            <div className="flex flex-col justify-center mx-8">
             <h1 className="p-6 text-4xl text-center text-white font-bold">
                    Hi i'm {' '} <span className="text-team"><TypeEffect text='KEVIN UYEH'/></span>
                    </h1>
                    <p className="text-white font-medium">
                    I am a versatile front-end web developer with a passion for building innovative and user-friendly web applications.
                    </p>
                    
                    <div className="flex flex-col md:flex-row">
                    <button 
                    onClick={handlePdfButton}
                    className="mx-auto mt-8 text-center bg-team hover:bg-white text-dark font-semibold p-2 rounded-md text-2xl">View CV</button>
                    

                   <a href="/OfficialResume.pdf" download className="mx-auto mt-8 text-center bg-team hover:bg-white text-dark font-semibold p-2 rounded-md text-2xl"> 
                   Download CV
                    </a>
                    </div> 
             </div>

                <img className="mx-auto md:mt-[70px] my-5"
                src={Dev}
                alt="/img"
                />
            </div>
        </div>
    )
}

export default Hero