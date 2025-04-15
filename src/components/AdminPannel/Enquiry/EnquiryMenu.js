import React from "react";
import MenuHeader from "../Navigation/MenuHeader";

const EnquiryMenu = () => {
  const EnquirytabsName = [
    { id: "1", title: "Service Request", path: "/admin/dashboard/service-request" },
    { id: "2", title: "Contact", path: "/admin/dashboard/contact-request" },

  ];
  return( <div>
    <MenuHeader tabsName={EnquirytabsName} />
  </div>);
};

export default EnquiryMenu;
