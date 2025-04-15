import React, { memo } from 'react';
import { Container, Typography, Box } from "@mui/material";
import ServiceAreaImage from "../../../public/assets/service-area.webp";
import Image from "next/image";

const ServiceArea = () => {
  return (
    <Box className="comp-space comp-color">
      <Container maxWidth="lg">
        <Box className="row g-4 align-items-center">
          {/* Left Content */}
          <Box className="col-12 col-md-6">
            <Typography variant="h5" component="h2">Service Areas</Typography>
            <Typography 
              variant="h3" 
              component="h1" 
              className="py-2"
            >Most Trusted Home Services Contractor in Houston.
            </Typography>
            <Typography variant="body1" paragraph>
              Serving a vast area across hundreds of miles and multiple cities, we have earned our reputation as Houston most reliable home services contractor. With offices in Houston, Dallas, San Antonio, Georgetown, and beyond, we proudly deliver top-quality solutions to homeowners across the state. Whether you reside in a cozy city home or a spacious rural ranch, our team is ready to bring your home improvement vision to life. Explore our service area list to find your town and start planning your next project today.
            </Typography>
          </Box>

          {/* Right Image */}
          <Box className="col-12 col-md-6 text-center">
            <Image
              src={ServiceAreaImage}
              alt="Texas Service Area Map"
              width={600}
              height={400}
              priority
              className="img-fluid"
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default memo(ServiceArea);
