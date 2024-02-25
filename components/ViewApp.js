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
          const appList = await axios.get('http://127.0.0.1:8000/api/app/appmodel/appnames');
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
        Select an app to view its dashboard.
        <DropdownClick options={list} />
      </div>
    );
  };
  
  export default ViewApp;