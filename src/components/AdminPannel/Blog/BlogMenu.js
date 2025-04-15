import React from "react";
import MenuHeader from "../Navigation/MenuHeader";

const BlogMenu = () => {
  const BlogtabsName = [
    { id: "1", title: "Blog", path: "/admin/dashboard/blogSetting" },
    
  ];
  return (
    <div>
      <MenuHeader tabsName={BlogtabsName} />
    </div>
  );
};

export default BlogMenu;
