import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  drivewayWalkwayServices,
  drivewayWalkwayWhyChooseUs,
  drivewayFaqData,
  drivewayWalkwayGallaryImages,
} from "../../../Data/ServiceData/DrivewayWalkwayData";
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

const DriveWayWalkWayService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Driveway & Walkway Services"
        subtitle="Expert installation, repair, and maintenance for driveways and walkways. Enhance your property's curb appeal and functionality with our quality craftsmanship."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Driveway & Walkway Services"
          subtitle="Comprehensive Solutions for Your Outdoor Spaces"
          data={drivewayWalkwayServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={drivewayWalkwayGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Driveway & Walkway Services"
          subtitle="Leading Concrete and Paving Experts in Texas"
          data={drivewayWalkwayWhyChooseUs}
        />

        <ServiceFaq data={drivewayFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(DriveWayWalkWayService);
