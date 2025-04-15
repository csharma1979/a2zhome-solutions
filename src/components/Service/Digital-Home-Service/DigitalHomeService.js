import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  digitalHomeWhyChooseUs,
  digitalHomeServices,
  digitalHomeFaqData,
} from "../../../Data/ServiceData/DigitalHomeData";
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

const DigitalHomeService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Smart Home Automation & Digital Solutions"
        subtitle="Transform your home with cutting-edge smart technology. Expert installation of home automation systems, security cameras, and digital upgrades."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Digital Home Services"
          subtitle="Comprehensive Smart Home Solutions"
          data={digitalHomeServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary />

        <WhyChooseUs
          title="Why Choose Our Digital Home Services"
          subtitle="Leading Smart Home Technology Experts in Texas"
          data={digitalHomeWhyChooseUs}
        />

        <ServiceFaq data={digitalHomeFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(DigitalHomeService);