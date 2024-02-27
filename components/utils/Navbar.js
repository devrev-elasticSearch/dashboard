"use client"
import { useState } from "react";
function Navbar() {
 
    const navigationLinks = [
      { name: 'Home', href: '/' },
      { name: 'Snap-ins', href: 'https://app.devrev.ai/hikeradi/settings/snap-ins' },
      {name:'Compare Apps',href:'/compare'}
    ];
  
    return (
      <nav className="bg-white shadow-md border-b border-gray-200 py-2 px-6 md:px-12 lg:px-16 flex items-center sticky top-0 z-9">
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