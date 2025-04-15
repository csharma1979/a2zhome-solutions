import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  electricalServices,
  electricalWhyChooseUs,
  electricalFaqData,
  electricalGallaryImages,
} from "../../../Data/ServiceData/ElectricalData";
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

const ElectricalService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Electrical Services"
        subtitle="Licensed electricians providing comprehensive electrical solutions. From installations to repairs, trust our experts for safe and reliable electrical services."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Electrical Services"
          subtitle="Complete Electrical Solutions for Your Home"
          data={electricalServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={electricalGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Electrical Services"
          subtitle="Licensed & Experienced Electricians in Texas"
          data={electricalWhyChooseUs}
        />

        <ServiceFaq data={electricalFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(ElectricalService);
