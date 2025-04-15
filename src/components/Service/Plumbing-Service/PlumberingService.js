import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  plumbingFaqData,
  plumbingService,
  plumbingWhyChooseUs,
  plumberingGalleryImages,
} from "../../../Data/ServiceData/PlumbingData";
import { kitchenService } from "../../../Data/ServiceData/KitchenData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const PlumberingService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Professional Plumbing Services You Can Trust"
        subtitle="Expert plumbing services for leak repairs, installations, and overhauls. Get reliable, efficient, and high-quality solutions tailored to your needs."
      />
      <ServiceCard
        title="Our Plumbering Services"
        subtitle="Expert solutions for your plumbering upgrades"
        data={kitchenService}
        showReadMore={false}
      />
      <ServiceProcess />
      <ServiceGallary data={plumberingGalleryImages} />

      <WhyChooseUs
        title="Why Choose Our Plumbing Services"
        subtitle="Expert Plumbing Solutions in Texas"
        data={plumbingWhyChooseUs}
      />
      <ServiceFaq data={plumbingFaqData} />
      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default PlumberingService;
