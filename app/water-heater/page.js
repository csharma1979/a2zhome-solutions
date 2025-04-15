"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import WaterHeaterService from "../../src/components/Service/WaterHeater-Service/WaterHeaterService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Expert Water Heater Installation & Repair Services</title>
        <meta name="title" content="Water Heater Services - Installation & Repairs" />
        <meta
          name="description"
          content="Reliable water heater installation and repair services for homes and businesses. Ensure hot water availability with our expert solutions. Contact us today for a free quote!"
        />
      </Helmet>
      <WaterHeaterService />
    </div>
  );
};

export default Page;
