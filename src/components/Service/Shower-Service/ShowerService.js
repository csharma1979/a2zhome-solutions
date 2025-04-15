import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  showerServices,
  showerWhyChooseUs,
  showerFaqData,
  showerGallaryImages,
} from "../../../Data/ServiceData/ShowerData";
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

const ShowerService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Shower Installation & Repair Services"
        subtitle="Expert shower solutions for installation, repair, and remodeling. Transform your bathroom with our quality craftsmanship and modern designs."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Shower Services"
          subtitle="Complete Shower Solutions for Your Bathroom"
          data={showerServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={showerGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Shower Services"
          subtitle="Leading Bathroom Renovation Experts in Texas"
          data={showerWhyChooseUs}
        />

        <ServiceFaq data={showerFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(ShowerService);
