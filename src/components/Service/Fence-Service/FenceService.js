import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  fenceServices,
  fenceWhyChooseUs,
  fenceFaqData,
  fenceGallaryImages,
} from "../../../Data/ServiceData/FenceData";
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

const FenceService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Fence Installation & Repair"
        subtitle="Expert fence services for residential and commercial properties. Quality materials and craftsmanship for durable, attractive fencing solutions."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Fence Services"
          subtitle="Complete Fencing Solutions for Your Property"
          data={fenceServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={fenceGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Fence Services"
          subtitle="Trusted Fence Contractors in Texas"
          data={fenceWhyChooseUs}
        />

        <ServiceFaq data={fenceFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(FenceService);
