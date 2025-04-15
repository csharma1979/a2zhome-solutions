"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import DoorService from "../../src/components/Service/Door-Service/DoorService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Premium Door Installation & Repair Services</title>
        <meta name="title" content="Expert Door Installation & Repair Services" />
        <meta
          name="description"
          content="Enhance security and style with our professional door installation and repair services. We offer custom doors, repairs, and upgrades. Get a free quote today!"
        />
      </Helmet>
      <DoorService />
    </div>
  );
};

export default Page;
