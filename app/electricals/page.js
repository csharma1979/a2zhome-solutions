"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import ElectricalService from "../../src/components/Service/Electrical-Service/ElectricalService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Expert Electrical Services for Homes & Businesses</title>
        <meta name="title" content="Professional Electrical Installation & Repair Services" />
        <meta
          name="description"
          content="Ensure safety and efficiency with our expert electrical services. We offer installations, repairs, panel upgrades, and more. Contact us today for a free quote!"
        />
      </Helmet>
      <ElectricalService />
    </div>
  );
};

export default Page;
