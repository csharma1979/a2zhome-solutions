"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import PaintingService from "../../src/components/Service/Painting-Service/PaintingService";

const Page = () => {
  return (
    <div>
      <Helmet>
        <title>Professional Painting Services for Your Home & Business</title>
        <meta name="title" content="Expert Interior & Exterior Painting Services" />
        <meta
          name="description"
          content="Transform your home or business with our professional painting services. We offer interior and exterior painting, custom finishes, and color consultations. Get a free quote today!"
        />
      </Helmet>
      <PaintingService />
    </div>
  );
};

export default Page;
