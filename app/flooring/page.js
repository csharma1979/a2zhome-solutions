"use client";


import React from "react";
import { Helmet } from "react-helmet-async";
import FlooringService from "../../src/components/Service/Flooring-Service/FlooringService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Premium Flooring Services for Homes & Businesses</title>
        <meta name="title" content="Expert Flooring Services - Installation & Repairs" />
        <meta
          name="description"
          content="Elevate your space with our professional flooring services. We offer expert installation, repairs, and maintenance for residential and commercial properties. Get a free quote today!"
        />
      </Helmet>
      <FlooringService />
    </div>
  );
};

export default Page;
