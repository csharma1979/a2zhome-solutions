import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  flooringServices,
  flooringWhyChooseUs,
  flooringFaqData,
  flooringGalleryImages,
} from "../../../Data/ServiceData/FlooringData";
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

const FlooringService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Flooring Installation & Repair"
        subtitle="Expert flooring services for all types of floors. From hardwood to tile, trust our skilled craftsmen for beautiful and durable flooring solutions."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Flooring Services"
          subtitle="Complete Flooring Solutions for Every Room"
          data={flooringServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={flooringGalleryImages} />

        <WhyChooseUs
          title="Why Choose Our Flooring Services"
          subtitle="Leading Flooring Experts in Texas"
          data={flooringWhyChooseUs}
        />

        <ServiceFaq data={flooringFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(FlooringService);
