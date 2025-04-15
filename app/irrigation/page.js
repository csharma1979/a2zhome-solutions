"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import IrrigationService from "../../src/components/Service/Irrigation-Service/IrrigationService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Professional Irrigation System Installation & Maintenance</title>
        <meta name="title" content="Expert Irrigation System Services – Installation & Maintenance" />
        <meta
          name="description"
          content="Ensure a healthy, lush landscape with our expert irrigation system installation and maintenance services. We provide customized solutions for residential and commercial properties. Get a free quote today!"
        />
      </Helmet>
      <IrrigationService />
    </div>
  );
};

export default Page;
