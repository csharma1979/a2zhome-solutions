import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  glassServices,
  glassWhyChooseUs,
  glassFaqData,
  glassGallaryImages,
} from "../../../Data/ServiceData/GlassData";
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

const GlassService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Glass Installation & Repair"
        subtitle="Expert glass services for windows, doors, and custom installations. Trust our skilled technicians for precise and reliable glass solutions."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Glass Services"
          subtitle="Comprehensive Glass Solutions for Your Home"
          data={glassServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={glassGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Glass Services"
          subtitle="Expert Glass Installation & Repair in Texas"
          data={glassWhyChooseUs}
        />

        <ServiceFaq data={glassFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(GlassService);
