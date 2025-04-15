"use client";

import React from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const AdminHeader = ({ setSidebarShow }) => {
  return (
    <header className="custom-header">
      <div className="header-container">
        <button
          className="header-toggler"
          onClick={() => setSidebarShow((prevState) => !prevState)}
        >
          <IoMenu size={30} />
        </button>

        {/* <div className="header-right">
          
          <Link href="/profile" className="header-item">
            <FaUser size={28}/>
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default AdminHeader;
