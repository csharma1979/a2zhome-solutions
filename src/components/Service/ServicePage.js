import React, { memo, lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import { features } from "../../Data/Navbar";
import ServiceBanner from "./ServiceBanner";

// Lazy load components
const ServiceCard = lazy(() => import("./ServiceCard"));
const CTA = lazy(() => import("../commonComps/CTA"));

const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" py={4}>
    <CircularProgress sx={{ color: '#0d6aa3' }} />
  </Box>
);

const ServicePage = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Home Services"
        subtitle="Expert solutions for all your home improvement needs. Quality workmanship and reliable service guaranteed."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Services"
          subtitle="Comprehensive Home Improvement Solutions"
          data={features}
          showReadMore={true}
        />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default memo(ServicePage);
