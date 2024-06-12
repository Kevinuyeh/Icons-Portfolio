import React from "react";
import { Link } from "react-router-dom";

function Contact () {
    return (
        <div className="w-full p-4 bg-black">
            <div className="bg-team rounded-md md:-mt-[100px] p-5 mx-8">
            <div className="grid md:grid-cols-2 mx-8 gap-4">
                <div className="flex flex-col p-3">
                    <h1 className=" text-4xl font-bold">Let's Work together on your next project</h1>
                    <p className=" mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero et reprehenderit ducimus sed numquam aperiam.</p>
                </div>

                <div className="flex items-center justify-center">
                    <Link to='/contact'><button className="bg-dark3 text-white rounded-md font-medium p-3 tracking-wider">
                        Contact
                    </button></Link>
                </div>
            </div>
        </div>

        <div className="flex gap-8 mt-8 md:mt-[100px] font-bold justify-center items-center text-center mx-auto pb-6">
        <Link to='/'><h1 className="text-white tracking-wide hover:text-team">HOME</h1></Link>
           <Link to='/about'><h1 className="text-white tracking-wide hover:text-team">ABOUT</h1></Link>
           <Link to='/contact'><h1 className="text-white tracking-wide hover:text-team">CONTACT</h1></Link>
            
        </div>
        </div>
    )
}

export default Contact