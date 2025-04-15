"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MenuHeader = ({ tabsName }) => {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState(router.pathname);

  const handleTabClick = (path) => {
    setSelectedTab(path);
  };
  return (
    <div className="d-flex flex-column flex-md-row my-2 py-2 gap-3 ">
      {tabsName.map((ele) => (
        <div
          key={ele.id}
          className={`d-flex align-items-center px-3 border py-2 tab-item ${
            selectedTab === ele.path ? "selected " : ""
          }`}
          style={{
            borderRadius: "5px",
            fontWeight: selectedTab === ele.path ? "bold" : "",
            backgroundColor: selectedTab === ele.path ? "#115580" : "#0d6aa3",
            transition: "background-color 0.3s, color 0.3s",
            cursor: "pointer",
            color: selectedTab === ele.path ? "#004a66 " : "black",
          }}
          onClick={() => handleTabClick(ele.path)}
        >
          <Link href={ele.path} className="tab-link">
            {ele.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuHeader;
