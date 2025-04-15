import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  roofingServices,
  roofingWhyChooseUs,
  roofingFaqData,
  roofGallaryImages,
} from "../../../Data/ServiceData/RoofData";
import ServiceBanner from "../ServiceBanner";

// Lazy load components
const ServiceProcess = lazy(() => import("../ServiceProcess"));
const ServiceGallary = lazy(() => import("../ServiceGallary"));
const ServiceFaq = lazy(() => import("../ServiceFaq"));
const ServiceCard = lazy(() => import("../ServiceCard"));
const WhyChooseUs = lazy(() => import("../WhyChooseUs"));
const ServiceArea = lazy(() => import("../ServiceArea"));
const CTA = lazy(() => import("../../commonComps/CTA"));

const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" py={4}>
    <CircularProgress sx={{ color: '#0d6aa3' }} />
  </Box>
);

const RoofService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Reliable Roof Installation, Repair & Maintenance Services"
        subtitle="Expert roofing services for installation, repair, and maintenance. Get durable, high-quality solutions for residential and commercial properties with superior craftsmanship."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Roof Services"
          subtitle="Professional Roofing Solutions"
          data={roofingServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={roofGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Roof Service"
          subtitle="Leading Roofing Experts in Texas"
          data={roofingWhyChooseUs}
        />

        <ServiceFaq data={roofingFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(RoofService);
