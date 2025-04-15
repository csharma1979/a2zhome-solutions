import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  irrigationServices,
  irrigationWhyChooseUs,
  irrigationFaqData,
  irrigationGallaryImages,
} from "../../../Data/ServiceData/IrrigationData";
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

const IrrigationService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Irrigation Services"
        subtitle="Expert irrigation system installation, maintenance, and repairs. Ensure your landscape stays healthy with our efficient watering solutions."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Irrigation Services"
          subtitle="Complete Irrigation Solutions for Your Property"
          data={irrigationServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={irrigationGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Irrigation Services"
          subtitle="Leading Irrigation Experts in Texas"
          data={irrigationWhyChooseUs}
        />

        <ServiceFaq data={irrigationFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(IrrigationService);
