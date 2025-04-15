"use client";


import React from "react";
import { Helmet } from "react-helmet-async";
import StructureService from "../../src/components/Service/Structure-Service/StructureService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Reliable Structural Services for Safe & Durable Construction</title>
        <meta name="title" content="Expert Structural Services - Design & Construction" />
        <meta
          name="description"
          content="Ensure safe and durable buildings with our expert structural services. From design to construction, we provide quality solutions for residential and commercial projects. Get a free consultation today!"
        />
      </Helmet>
      <StructureService />
    </div>
  );
};

export default Page;
