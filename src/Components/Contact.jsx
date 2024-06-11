import React from "react";

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
                    <button className="bg-dark3 text-white rounded-md font-medium p-3 tracking-wider">
                        Contact
                    </button>
                </div>
            </div>
        </div>

        <div className="flex gap-8 mt-8 md:mt-[100px] font-bold justify-center items-center text-center mx-auto pb-6">
            <h1 className="text-white tracking-wide">HOME</h1>
            <h1 className="text-white tracking-wide">ABOUT</h1>
            <h1 className="text-white tracking-wide">CONTACT</h1>
            
        </div>
        </div>
    )
}

export default Contact