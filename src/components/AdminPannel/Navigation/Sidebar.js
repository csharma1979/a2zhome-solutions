"use client";
import '@/styles/Sidebar.css';

import React from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import Image from "next/image";

const Sidebar = ({sidebarShow}) => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Clear the token
    router.push("/cms-login");
  };
  
  return (
    <div className={`sidebar-container ${sidebarShow ? "open" : "closed"}`}>
      <Link href="/" className="nav-item border-bottom p-0">
        <img
          src="/assets/Fritado-logo.webp"
          alt="A2Zhome-Solutions"
          height={50}
          width={200}
          className="mx-auto  py-2 logo-image"
          
        />
      </Link>
      <Link href="" className="nav-item"
       //activeClassName="active"
      >
        <span className="icon-wrapper"></span>
        Dashboard
      </Link>
      <Link
        href="/admin/dashboard/blogSetting"
        className="nav-item"
        //activeClassName="active"
      >
        <span className="icon-wrapper"></span>
        Content management
      </Link>
      <Link
        href="/admin/dashboard/service-request"
        className="nav-item"
        //activeClassName="active"
      >
        <span className="icon-wrapper"></span>
        Enquiry
      </Link>

      <div className="nav-item cursor-pointer" onClick={handleLogout}>
        <span className="icon-wrapper"></span>
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
