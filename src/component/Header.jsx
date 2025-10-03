import { Link, useLocation } from "react-router-dom";
 import { useState } from "react";

function Header() {
  const location = useLocation();
  const active = location.pathname === "/" ? "Home" : "About";
   const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 lg:px-[72px] py-4 flex justify-between items-center z-10 relative">

      {/*logo*/}

      <div className="flex-shrink-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d9865b75fd91722613f82764063c2e468296c135?width=170"
          alt="Tooth Talk Logo"
          className="w-[85px] h-[74px]"
        />
      </div>

      {/*nav-buttons*/}
      <div className=" gap-6 hidden lg:flex">
        <Link
          to="/"
          className={`cursor-pointer pb-1 border-b-2 transition-transform flex duration-500 hover:scale-110 ${active === "Home" ? "border-red-500" : "border-transparent"
            }`}
        >
          Home
        </Link>
        <div
          className={`cursor-pointer pb-1 border-b-2 transition-transform flex duration-500 hover:scale-110 ${active === "About" ? "border-red-500" : "border-transparent"
            }`}
        >
          About
        </div>
      </div>
      
      {/*action-buttons */}
      <div className="btn gap-[12px] hidden lg:flex ">
        <button type="button" className="text-black  font-medium  text-[18px] bg-white  transition-transform duration-500 hover:scale-110 px-5 py-2.5 text-center me-2 mb-2">Login</button>
        <Link to={'/register'} className="  font-medium  text-[18px] transition-transform duration-500 hover:scale-110  bg-[#843E71] hover:bg-[#843E71]/90 text-white 0 px-5 py-2.5 text-center me-2 mb-2">Register</Link>
      </div>


      {/* mobile design */}

     <div className="lg:hidden relative">
      {/* Hamburger Icon */}
      <button
  className="text-black focus:outline-none"
  onClick={() => setIsOpen(!isOpen)}
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>


      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 flex flex-col bg-gray-100 px-[20px] shadow-lg py-2 w-40 z-50">
          <li className="text-[18px] font-bold">Home</li>
           <li className="text-[18px] font-bold">About</li>
           <button className="bg-[#843E71] mb-4 py-2 px-3 text-black text-[18px]">Login</button>
           <button className="bg-[#843E71] text-white py-2 px-3  text-[18px]">Register</button>
        </ul>
      )}
    </div>


    </header>
  );
}

export default Header;
