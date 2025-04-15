import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  plumberingServices,
  plumberingWhyChooseUs,
  plumberingFaqData,
  plumberingGalleryImages,
} from "../../../Data/ServiceData/PlumbingData";
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

const PlumbingService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Plumbing Services"
        subtitle="Expert plumbing solutions for residential and commercial properties. From repairs to installations, trust our licensed plumbers for reliable service."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Plumbing Services"
          subtitle="Comprehensive Plumbing Solutions"
          data={plumberingServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={plumberingGalleryImages} />

        <WhyChooseUs
          title="Why Choose Our Plumbing Services"
          subtitle="Licensed Plumbing Experts in Texas"
          data={plumberingWhyChooseUs}
        />

        <ServiceFaq data={plumberingFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(PlumbingService);