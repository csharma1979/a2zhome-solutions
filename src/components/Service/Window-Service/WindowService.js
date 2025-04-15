import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import{
  windowServices,
  windowWhyChooseUs,
  windowFaqData,
  windowGallaryImages,
} from "../../../Data/ServiceData/WindowData" ;
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

const WindowService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Window Installation & Repair"
        subtitle="Expert window solutions for installation, repair, and replacement. Enhance your home's energy efficiency and aesthetics with our quality window services."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Window Services"
          subtitle="Complete Window Solutions for Your Home"
          data={windowServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={windowGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Window Services"
          subtitle="Leading Window Installation Experts in Texas"
          data={windowWhyChooseUs}
        />

        <ServiceFaq data={windowFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(WindowService);
