"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import PlumberingService from "../../src/components/Service/Plumbing-Service/PlumberingService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Reliable Plumbing Services for Your Home & Business</title>
        <meta name="title" content="Expert Plumbing Services - Repairs & Installations" />
        <meta
          name="description"
          content="Get professional plumbing services for your home or business. From repairs to installations, our skilled plumbers provide reliable and affordable solutions. Contact us today!"
        />
      </Helmet>
      <PlumberingService />
    </div>
  );
};

export default Page;
