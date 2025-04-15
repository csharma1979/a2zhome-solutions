"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import HVACService from "../../src/components/Service/HVAC-Service/HVACService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Professional HVAC Installation & Repair Services</title>
        <meta name="title" content="Expert HVAC Services - Installation & Repairs" />
        <meta
          name="description"
          content="Reliable HVAC installation, repair, and maintenance services for homes and businesses. Ensure year-round comfort with our expert solutions. Contact us today for a free quote!"
        />
      </Helmet>
      <HVACService />
    </div>
  );
};

export default Page;
