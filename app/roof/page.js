"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import RoofService from "../../src/components/Service/Roof-Service/RoofService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Expert Roof Installation, Repair & Maintenance Services</title>
        <meta name="title" content="Professional Roof Installation & Repair Services" />
        <meta
          name="description"
          content="Ensure a safe and durable roof with our expert installation, repair, and maintenance services. We offer customized roofing solutions for homes and businesses. Get a free quote today!"
        />
      </Helmet>
      <RoofService />
    </div>
  );
};

export default Page;
