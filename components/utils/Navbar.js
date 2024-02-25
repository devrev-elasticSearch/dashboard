"use client"
import { useState } from "react";
function Navbar() {
 
    const navigationLinks = [
      { name: 'Home', href: '/' },
      { name: 'Content', href: '#content' },
      { name: 'Audience', href: '#audience' },
      { name: 'Research', href: '#research' },
    ];
  
    return (
      <nav className="flex justify-between items-center bg-white py-4 shadow-md border-b border-gray-200 py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
        {/* Navigation links */}
        <ul className="hidden md:flex space-x-4">
          {navigationLinks.map((link, index) => (
            <li key={index} className="text-gray-700 font-medium hover:text-blue-500">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
  
        
      </nav>
      
    );
  }
  
  export default Navbar;