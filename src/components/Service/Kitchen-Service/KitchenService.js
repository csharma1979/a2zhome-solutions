import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  kitchenService,
  kitchenWhyChooseUs,
  kitchenfaqData,
  kitchenGalleryImages,
} from "../../../Data/ServiceData/KitchenData";
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

const KitchenService = () => {
  return (
    <Box 
      component="main" 
      className="home-page"
      sx={{ minHeight: '100vh' }}
    >
      <ServiceBanner
        title="Professional Kitchen Remodeling Services"
        subtitle="Transform your kitchen with our expert remodeling services. From design to installation, we create beautiful and functional spaces."
      />

      <Suspense fallback={<LoadingFallback />}>
        <ServiceCard
          title="Our Kitchen Services"
          subtitle="Complete Kitchen Renovation Solutions"
          data={kitchenService}
          showReadMore={false}
        />

        <ServiceProcess />
        
        <ServiceGallary data={kitchenGalleryImages} />

        <WhyChooseUs
          title="Why Choose Our Kitchen Services"
          subtitle="Premier Kitchen Remodeling Experts in Texas"
          data={kitchenWhyChooseUs}
        />

<ServiceFaq data={kitchenfaqData} />
        
        <ServiceArea />

        <CTA />
      </Suspense>
    </Box>
  );
};

export default React.memo(KitchenService);
