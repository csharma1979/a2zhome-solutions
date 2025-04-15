"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import ShowerService from "../../src/components/Service/Shower-Service/ShowerService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Expert Shower Installation & Repair Services</title>
        <meta name="title" content="Professional Shower Installation & Repairs" />
        <meta
          name="description"
          content="Transform your bathroom with our expert shower installation and repair services. We offer custom designs, efficient repairs, and maintenance. Contact us today for a free quote!"
        />
      </Helmet>
      <ShowerService />
    </div>
  );
};

export default Page;
