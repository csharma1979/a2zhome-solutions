"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import DigitalHomeService from "../../src/components/Service/DigitalHome-Service/DigitalHomeService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Smart Digital Home Solutions for Modern Living</title>
        <meta name="title" content="Advanced Digital Home Automation Services" />
        <meta
          name="description"
          content="Upgrade your lifestyle with our smart digital home solutions. We offer home automation, security systems, smart lighting, and more. Get a free consultation today!"
        />
      </Helmet>
      <DigitalHomeService />
    </div>
  );
};

export default Page;
