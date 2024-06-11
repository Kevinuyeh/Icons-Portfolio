import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import './Nav.css'
import { IoCodeSlashSharp } from "react-icons/io5";

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };

    return(

<div>
<nav className='bg-dark3 shadow md:flex md:items-center md:justify-between gap-5'>
<div className='fixed top-0 left-0 w-full z-50'>
            <div className='bg-dark3 flex justify-between items-center relative p-4'>
                <Link to='/'>
                    <span className='cursor-pointer w-full font-galada text-2xl md:text-3xl text-team md:mx-8 flex items-center'>
                   
                        <span className='flex font-galada ml-[100px] md:ml-[120px] gap-4'>
                        <IoCodeSlashSharp size={40} className='text-white'/>
                        Kevin Uyeh
                    </span>
                    </span>
                </Link>
                <span onClick={handleNav} className={`cursor-pointer ${!nav && 'md:hidden'} block`}>
                    {nav ? <AiOutlineClose size={20} color="white"/> : <AiOutlineMenu size={20} color="white"/>}
                </span>
                <ul className={nav ? 'opacity-100 h-full md:relative md:h-auto md:bg-transparent md:opacity-100 md:flex md:items-center' : 'hidden md:flex md:items-center'}>
                    <li className='mx-4 my-6 md:my-0 text-xl text-white font-semibold transition-colors duration-700 rounded-full cursor-pointer p-4'>
                        <Link to='/' onClick={() => setNav(false)}>Home</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0 text-xl text-white font-semibold transition-colors duration-700 rounded-full cursor-pointer p-4'>
                        <Link to='/about' onClick={() => setNav(false)}>About</Link>
                    </li>
                   
                    <li className='mx-4 my-6 md:my-0 text-xl text-white font-semibold transition-colors duration-700 rounded-full cursor-pointer p-4'>
                        <Link to='/contact' onClick={() => setNav(false)}>Contact</Link>
                    </li>
                    {/* <li className='mx-4 my-6 md:my-0 text-xl hover:bg-gray-800 hover:text-white text-gray-800 font-semibold transition-colors duration-700 rounded-full cursor-pointer p-4'>
                        <Link to='/login' onClick={() => setNav(false)}>Sign In</Link>
                    </li> */}
                </ul>
            </div>
            {/* Spacer to prevent content from being overlapped */}
        </div>
            <div className='h-20 md:hidden'>



    <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-cream w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
    <li className='mx-4 my-6 md:my-0 text-xl hover:bg-gray-800 hover:text-white text-gray-800 font-semibold transition-colors duration-700 rounded-full cursor-pointer p-4'><Link to='/'>Home</Link></li>
        <li className='mx-4 my-6 md:my-0 text-xl hover:bg-gray-800 hover:text-white text-gray-800 font-semibold transition-colors duration-700 rounded-full cursor-pointer p-4'><Link to='/about'>About</Link></li>
        
        <li className='mx-4 my-6 md:my-0 text-xl hover:bg-gray-800 hover:text-white text-gray-800 font-semibold transition-colors duration-700 rounded-full cursor-pointer p-4'><Link to='/contact'>Contact</Link></li>
        {/* <li className='mx-4 my-6 md:my-0 text-xl hover:bg-gray-800 hover:text-white text-gray-800 font-semibold transition-colors duration-700 rounded-full cursor-pointer p-4'><Link to='/login'>Sign In</Link></li> */}
    </ul>
    </div>
</nav>
</div>
)
}

export default Navbar