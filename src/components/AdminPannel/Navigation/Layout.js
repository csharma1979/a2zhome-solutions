"use client";

import React , {useState} from "react";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
  const [sidebarShow, setSidebarShow] = useState(true);

  return (
    <div className="layout">
      <Sidebar sidebarShow={sidebarShow} />
      <div className="main-content">
        <AdminHeader
          sidebarShow={sidebarShow}
          setSidebarShow={setSidebarShow}
        />
       <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
