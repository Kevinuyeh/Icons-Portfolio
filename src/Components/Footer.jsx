import React from "react";
import { FaWolfPackBattalion } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoDiamondSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div className="w-full bg-dark3 pb-4">
            <div className="flex justify-between items-center mx-auto text-center gap-6">
                <div className="mt-8 text-team mx-6">
                <FaWolfPackBattalion color="team" size={30}/>
                </div>

                <div className="gap-3 text-team mx-auto text-center flex mt-8">
                <Link to='www.linkedin.com/in/kevin-uyeh-b7bb22176'><FaLinkedin  size={30}/></Link>
                <Link to='https://www.instagram.com/icon._.livin?igsh=MWF3M293NWF3bHlvcA%3D%3D&utm_source=qr'></Link><FaInstagram  size={30}/>
                <Link to='https://x.com/Icon_livin_3'></Link><FaXTwitter  size={30}/>
                </div>
                
                <div className="flex text-team  mx-6 mt-8">
                <IoDiamondSharp color="team" size={30}/>
                <h1 className="text-white mx-3">Created by Kevin Uyeh</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer