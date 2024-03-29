"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import DropdownMenu from './utils/DropdownMenu';
import DropdownClick from './utils/DropdownClick';

const ViewApp = () => {
    const [list, setList] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const router = useRouter();
    useEffect(() => {
        // Check if the selected option is not null before navigating
        if (selectedOption) {
          router.push(`/${selectedOption}`);
        }
      }, [selectedOption]); 
    useEffect(() => {
      const fetchApps = async () => {
        try {
          const appList = await axios.get(process.env.NEXT_PUBLIC_APP_NAME_URL);
          setList(appList.data);
        } catch (error) {
          console.error('Error fetching apps:', error);
        }
      };
      fetchApps();
    }, []);
  
    const handleViewButtonClick = () => {
      if (selectedOption) {
        router.push(`/${selectedOption}`);
      } else {
        alert('Please select an app before viewing!');
      }
    };
  
    return (
      <div>
      <h2 className="text-xl font-semibold mb-4">Select an app to view its dashboard.</h2>
      <DropdownClick options={list} />
    </div>
    );
  };
  
  export default ViewApp;