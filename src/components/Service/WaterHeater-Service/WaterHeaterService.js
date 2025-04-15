import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  waterHeaterServices,
  waterHeaterWhyChooseUs,
  waterHeaterFaqData,
  waterHeaterGalleryImages,
} from "../../../Data/ServiceData/WaterHeaterData";
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

const WaterHeaterService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Water Heater Services"
        subtitle="Expert water heater installation, repair, and maintenance. Trust our certified technicians for efficient and reliable hot water solutions."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Water Heater Services"
          subtitle="Complete Water Heater Solutions"
          data={waterHeaterServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={waterHeaterGalleryImages} />

        <WhyChooseUs
          title="Why Choose Our Water Heater Services"
          subtitle="Leading Water Heater Experts in Texas"
          data={waterHeaterWhyChooseUs}
        />

        <ServiceFaq data={waterHeaterFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(WaterHeaterService);
