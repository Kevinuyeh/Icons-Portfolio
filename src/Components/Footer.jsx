import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return(
        <div className="w-full bg-dark3 pb-4">
            <div className="flex flex-col justify-between items-center mx-auto text-center gap-6">

                <div className="gap-3 text-team mx-auto text-center flex mt-8">
                  <a href='linkedin.com/in/kevin-uyeh-b7bb22176'target='_blank' rel='noopener noreferrer' > <FaLinkedin className='cursor-pointer hover:text-cream' size={30} /></a>
                 <a href='https://www.instagram.com/icon._.livin?igsh=MWF3M293NWF3bHlvcA%3D%3D&utm_source=qr'target='_blank' rel='noopener noreferrer' ><FaInstagram className='cursor-pointer hover:text-cream' size={30} /></a>
                    <a href='https://x.com/Icon_livin_3'target='_blank' rel='noopener noreferrer' ><FaXTwitter className='cursor-pointer hover:text-cream' size={30} /></a> 
                </div>
                

                
                <h1 className="text-white mx-3">Created by <span className="text-team">Kevin Uyeh </span>All rights reserved © 2024</h1>
                
            </div>
        </div>
    )
}

export default Footer