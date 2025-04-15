import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  paintingServices,
  paintingWhyChooseUs,
  paintingFaqData,
  paintingGallaryImages,
} from "../../../Data/ServiceData/PaintingData";
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

const PaintingService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Painting Services"
        subtitle="Expert interior and exterior painting solutions. Transform your space with our skilled painters and premium quality materials."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Painting Services"
          subtitle="Complete Painting Solutions for Your Property"
          data={paintingServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={paintingGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Painting Services"
          subtitle="Premier Painting Experts in Texas"
          data={paintingWhyChooseUs}
        />

        <ServiceFaq data={paintingFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(PaintingService);
