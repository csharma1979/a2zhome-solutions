"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import FenceService from "../../src/components/Service/Fence-Service/FenceService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Professional Fence Installation & Repair Services</title>
        <meta name="title" content="Expert Fence Services - Installation & Repairs" />
        <meta
          name="description"
          content="Enhance your property's security and curb appeal with our professional fence installation and repair services. We offer customized solutions for residential and commercial properties. Get a free quote today!"
        />
      </Helmet>
      <FenceService />
    </div>
  );
};

export default Page;
