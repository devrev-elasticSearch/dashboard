"use client"
import { useState } from "react";
function Navbar() {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullscreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    }
  };
    const navigationLinks = [
      { name: 'Overview', href: '#overview' },
      { name: 'Content', href: '#content' },
      { name: 'Audience', href: '#audience' },
      { name: 'Research', href: '#research' },
    ];
  
    return (
      // <nav className="flex justify-between items-center bg-white py-4 shadow-md border-b border-gray-200">
      //   {/* Navigation links */}
      //   <ul className="hidden md:flex space-x-4">
      //     {navigationLinks.map((link, index) => (
      //       <li key={index} className="text-gray-700 font-medium hover:text-blue-500">
      //         <a href={link.href}>{link.name}</a>
      //       </li>
      //     ))}
      //   </ul>
  
      //   {/* Mobile menu button */}
      //   <button className="md:hidden block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2">
      //     <svg className="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      //       <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" />
      //     </svg>
      //   </button>
      // </nav>
      <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button type="button" className="text-lg text-gray-900 font-semibold sidebar-toggle">
        <i className="ri-menu-line"></i>
      </button>

      <ul className="ml-auto flex items-center">
        <li className="mr-1 dropdown">
          {/* Dropdown content */}
        </li>

        <li className="dropdown">
          {/* Dropdown content */}
        </li>

        <button id="fullscreen-button" onClick={toggleFullscreen}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="hover:bg-gray-100 rounded-full" viewBox="0 0 24 24" style={{ fill: 'gray', transform: '', msFilter: '' }}>
            <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></path>
          </svg>
        </button>

        <li className="dropdown ml-3">
          {/* Dropdown content */}
        </li>
      </ul>
    </div>
    );
  }
  
  export default Navbar;