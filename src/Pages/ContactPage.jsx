import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import emailjs from '@emailjs/browser'
import Cont from "../Assets/Contact-Me.png"
import { FaEnvelope, FaInstagram, FaLocationArrow, FaPhoneAlt, FaLinkedin, FaTwitter, } from 'react-icons/fa'
import Footer from "../Components/Footer";
import { FaGithub } from "react-icons/fa6";


function ContactPage() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_futwipg','template_wsyrbgp', form.current, 'CXRttKVXsDx4H-9xK')
        
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

    
    }
    return (
            <div className="w-full bg-black">
                <Navbar />

                <h1 className="text-4xl md:text-6xl tracking-wider mx-auto text-center text-white md:mt-[150px]">Contact Me</h1>
                <div className="relative p-6">
                    <div className="absolute bottom-0 left-0 w-full">
                        <div className="h-0.5 bg-team w-12 mx-auto mb-1"></div> {/* Short line on top */}
                        <div className="h-0.5 bg-team w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
                        <div className="h-0.5 bg-team w-12 mx-auto"></div> {/* Short line on bottom */}
                    </div>
                </div>

                <img src={Cont} alt='/img' className='w-[300px] mx-auto rounded-md mt-10' />


                <div className='antialiased'>
                    <div className='flex w-full min-h-screen justify-center items-center pb-[4rem] mt-[100px] sm:mt-[100px] md:mt-[80px]'>
                        <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-team w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg overflow-hidden'>

                            <div className='flex flex-col space-y-8 justify-between'>
                                <div>
                                    <h1 className='font-bold text-4xl tracking-wide'>Contact Me</h1>
                                    <p className='pt-2 text-sm font-medium'>I am quick to respond and eager to assist you with any questions, enquiries and projects you wish to make a reality.</p>
                                </div>
                                <div className='inline-flex space-x-2 items-center font-medium'>
                                    <FaPhoneAlt className='text-cream text-xl' />
                                    <span>+(234)810-147-5780</span>
                                </div>
                                <div className='inline-flex space-x-2 items-center font-medium'>
                                    <FaLocationArrow className='text-cream text-xl' />
                                    <span>Jos, Plateau State, Nigeria</span>
                                </div>
                                <div className='inline-flex space-x-2 items-center font-medium'>
                                    <FaEnvelope className='text-cream text-xl' />
                                    <span>contact@isrealkevin929@gmail.com</span>
                                </div>


                                <div className='flex space-x-4 text-lg'>
                                    <a href='https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav'> <FaLinkedin className='cursor-pointer hover:text-cream' size={30} /></a>
                                    <a href="https://github.com/Kevinuyeh"><FaGithub className='cursor-pointer hover:text-cream' size={30} /></a>
                                    <a href='https://www.instagram.com/icon._.livin?igsh=MWF3M293NWF3bHlvcA%3D%3D&utm_source=qr'><FaInstagram className='cursor-pointer hover:text-cream' size={30} /></a>
                                    <a href='https://x.com/Icon_livin_3'><FaTwitter className='cursor-pointer hover:text-cream' size={30} /></a>
                                </div>
                            </div>

                            <div className='relative'>
                                <div className='absolute z-0 w-40 h-40 bg-black rounded-full -right-28 -top-28'></div    >
                                <div className='absolute z-0 w-40 h-40 bg-black rounded-full -left-28 -bottom-16'></div>
                                <div className='relative z-0 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>


                                    <form ref={form} onSubmit={sendEmail} action=""  className='flex flex-col space-y-4'>
                                        <div>
                                            <label className='text-sm '>Your Name</label>
                                        </div>

                                        <div>
                                            <input type='text' placeholder='Your Name' name='user_name' required className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 '
                                            />
                                        </div>

                                        <div>
                                            <label className='text-sm '>Email Address</label>
                                        </div>

                                        <div>
                                            <input type='email' placeholder='Email Address' name='user_email' required className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 '
                                            />
                                        </div>


                                        <div>
                                            <label className='text-sm '>Message</label>

                                            <textarea name='message' placeholder='Message'
                                                rows='4'
                                                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 '
                                            ></textarea>
                                        </div>

                                        <button type='submit' 
                                        className='inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'
                                        >Send Message</button>

                                    </form>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
}

export default ContactPage