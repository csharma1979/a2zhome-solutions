
"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import CabinetService from "../../src/components/Service/Cabinet-Service/CabinetService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Custom Cabinet Installation & Repair Services</title>
        <meta name="title" content="Expert Cabinet Installation & Repairs" />
        <meta
          name="description"
          content="Upgrade your space with our expert cabinet installation and repair services. We offer custom designs, precision installation, and reliable repairs. Contact us for a free quote today!"
        />
      </Helmet>
      <CabinetService />
    </div>
  );
};

export default Page;
