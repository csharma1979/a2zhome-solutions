"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import GlassService from "../../src/components/Service/Glass-Service/GlassService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Expert Glass Installation & Repair Services</title>
        <meta name="title" content="Professional Glass Installation & Repair Services" />
        <meta
          name="description"
          content="Enhance your home with expert glass installation and repair services. We offer custom glass solutions, energy-efficient upgrades, and fast repairs. Get a free quote today!"
        />
      </Helmet>
      <GlassService />
    </div>
  );
};

export default Page;
