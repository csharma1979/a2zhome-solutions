import React from "react";
import { Box, Container, Typography } from "@mui/material";

const ServiceBanner = ({ title, subtitle }) => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: '300px', md: '400px' },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 8 },
        backgroundColor: '#0d6aa3', // Updated background color
        color: 'white',
        textAlign: 'center'
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 4, md: 5 }
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: 3
          }}
        >
          {title}
        </Typography>
        
        {subtitle && (
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.5
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default ServiceBanner;
