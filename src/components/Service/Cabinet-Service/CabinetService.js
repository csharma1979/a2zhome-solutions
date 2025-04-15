import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  cabinetWhyChooseUs,
  cabinetServices,
  cabinetFaqData,
} from "../../../Data/ServiceData/CabinetsData";
import ServiceBanner from "../ServiceBanner";

// Lazy load components
const ServiceProcess = lazy(() => import("../ServiceProcess"));
const ServiceGallary = lazy(() => import("../ServiceGallary"));
const ServiceFaq = lazy(() => import("../ServiceFaq"));
const ServiceCard = lazy(() => import("../ServiceCard"));
const WhyChooseUs = lazy(() => import("../WhyChooseUs"));
const ServiceArea = lazy(() => import("../ServiceArea"));
const CTA = lazy(() => import("../../commonComps/CTA"));

// Loading fallback component
const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" py={4}>
    <CircularProgress />
  </Box>
);

const CabinetService = () => {
  return (
    <Box component="main" className="home-page">
      <ServiceBanner
        title="High-Quality Cabinet Installation & Repair Services"
        subtitle="Expert cabinet services for installation, repairs, and makeovers. Get durable, stylish solutions with high-quality craftsmanship for kitchens, bathrooms, and more."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Cabinet Services"
          subtitle="Expert solutions for your kitchen upgrades"
          data={cabinetServices}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary />

        <WhyChooseUs
          title="Why Choose Our Cabinet Services"
          subtitle="Quality Kitchen Cabinet Refacing in Texas"
          data={cabinetWhyChooseUs}
        />

        <ServiceFaq data={cabinetFaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(CabinetService);
