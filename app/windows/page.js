"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import WindowService from "../../src/components/Service/Window-Service/WindowService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Expert Window Installation & Repair Services</title>
        <meta name="title" content="Professional Window Installation & Repair Services" />
        <meta
          name="description"
          content="Enhance your home with expert window installation and repair services. We offer custom windows, energy-efficient solutions, and prompt repairs. Get a free quote today!"
        />
      </Helmet>
      <WindowService />
    </div>
  );
};

export default Page;
