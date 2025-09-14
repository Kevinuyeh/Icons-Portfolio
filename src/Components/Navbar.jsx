// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { IoCodeSlashSharp } from "react-icons/io5";

// function Navbar() {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div>
//       <nav className="bg-dark3 shadow-md flex items-center justify-between w-full z-50  p-3">
//         {/* Title aligned to the left */}
//         <div className="flex items-center mx-8">
//           <Link to="/" className="flex items-center">
//             <IoCodeSlashSharp size={30} className="text-white mr-2" />
//             <span className="text-white font-galada text-lg md:text-xl">Iconic Vision</span>
//           </Link>
//         </div>

//         {/* Hamburger Icon for mobile */}
//         <span onClick={handleNav} className="md:hidden block cursor-pointer">
//           {nav ? <AiOutlineClose size={25} color="white" /> : <AiOutlineMenu size={25} color="white" />}
//         </span>

//         {/* Navigation items - pushed to the right */}
//         <ul
//           className={`${
//             nav ? 'left-0' : '-left-full'
//           } md:static absolute md:mx-8 top-3 md:top-12 md:flex md:items-center bg-dark3 md:bg-transparent w-[75%] md:w-auto h-screen md:h-auto p-5 md:p-0 transition-all duration-500 ease-in-out md:ml-auto`}
//         >
//           <li className="text-white text-xl p-2">
//             <Link to="/" onClick={() => setNav(false)}>Home</Link>
//           </li>
//           <li className="text-white text-xl p-2">
//             <Link to="/about" onClick={() => setNav(false)}>About</Link>
//           </li>
//           <li className="text-white text-xl p-2">
//             <Link to="/contact" onClick={() => setNav(false)}>Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;







import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoCodeSlashSharp } from "react-icons/io5";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {/* Navbar fixed at top */}
      <nav className="bg-dark3 shadow-md flex items-center justify-between fixed top-0 w-full z-50 p-5">
        {/* Title aligned to the left */}
        <div className="flex items-center mx-8">
          <Link to="/" className="flex items-center">
            <IoCodeSlashSharp size={30} className="text-white mr-2" />
            <span className="text-white font-galada text-lg md:text-xl">
              Iconic Vision
            </span>
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <span onClick={handleNav} className="md:hidden block cursor-pointer">
          {nav ? (
            <AiOutlineClose size={25} color="white" />
          ) : (
            <AiOutlineMenu size={25} color="white" />
          )}
        </span>

        {/* Navigation items */}
        <ul
          className={`${
            nav ? "left-0" : "-left-full"
          } md:static absolute md:mx-8 top-3 md:top-12 md:flex md:items-center bg-dark3 md:bg-transparent w-[75%] md:w-auto h-screen md:h-auto p-5 md:p-0 transition-all duration-500 ease-in-out md:ml-auto`}
        >
          
          <li className="text-white text-xl p-2">
            <Link to="/" onClick={() => setNav(false)}>
              Home
            </Link>
          </li>
          <li className="text-white text-xl p-2">
            <Link to="/about" onClick={() => setNav(false)}>
              About
            </Link>
          </li>
                    <li className="text-white text-xl p-2">
            <Link to="/projectpage" onClick={() => setNav(false)}>
              Projects
            </Link>
          </li>
          <li className="text-white text-xl p-2">
            <Link to="/contact" onClick={() => setNav(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Spacer div to prevent hero/content from being hidden under navbar */}
      <div className="h-[70px]"></div>
    </div>
  );
}

export default Navbar;
