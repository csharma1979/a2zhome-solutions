import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  hvacServices,
  hvacWhyChooseUs,
  hvacFaqData,
  hvacGalleryImages,
} from "../../../Data/ServiceData/HvacData";
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

const HVACService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional HVAC Services"
        subtitle="Expert heating, ventilation, and air conditioning solutions. Trust our certified technicians for installation, maintenance, and repairs."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our HVAC Services"
          subtitle="Complete Climate Control Solutions"
          data={hvacServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={hvacGalleryImages} />

        <WhyChooseUs
          title="Why Choose Our HVAC Services"
          subtitle="Licensed HVAC Experts in Texas"
          data={hvacWhyChooseUs}
        />

        <ServiceFaq data={hvacFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(HVACService);
