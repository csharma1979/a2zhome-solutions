import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  structureService,
  structureWhyChooseUs,
  structureFaqData,
  structureGallaryImages,
} from "../../../Data/ServiceData/StructureData";
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

const StructureService = () => {
  return (
    <Box component="main" className="home-page" sx={{ minHeight: '100vh' }}>
      <ServiceBanner
        title="Professional Structural Services"
        subtitle="Expert structural solutions for residential and commercial properties. Trust our experienced team for reliable construction and renovation services."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Structural Services"
          subtitle="Comprehensive Construction Solutions"
          data={structureService}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={structureGallaryImages} />

        <WhyChooseUs
          title="Why Choose Our Structural Services"
          subtitle="Leading Construction Experts in Texas"
          data={structureWhyChooseUs}
        />

        <ServiceFaq data={structureFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(StructureService);
