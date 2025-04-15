import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  doorServices,
  doorWhyChooseUs,
  doorFaqData,
  doorGallaryImages,
} from "../../../Data/ServiceData/DoorData";
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

const DoorService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Quality Door Installation & Repair Services"
        subtitle="Expert door services for installation, repair, and replacement. Enhance security, functionality, and style with high-quality craftsmanship for homes and businesses."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Door Services"
          subtitle="Professional Door Solutions for Your Home"
          data={doorServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={doorGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Door Service"
          subtitle="Expert Door Installation & Repair in Texas"
          data={doorWhyChooseUs}
        />

        <ServiceFaq data={doorFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(DoorService);
