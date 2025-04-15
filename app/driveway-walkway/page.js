"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import DriveWayWalkWayService from "../../src/components/Service/DriveWay-WalkWay-Service/DriveWayWalkWayService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Professional Driveway & Walkway Services</title>
        <meta name="title" content="Expert Driveway & Walkway Installation & Repairs" />
        <meta
          name="description"
          content="Enhance your property's curb appeal and accessibility with our professional driveway and walkway installation and repair services. Contact us today for a free quote!"
        />
      </Helmet>
      <DriveWayWalkWayService />
    </div>
  );
};

export default Page;
