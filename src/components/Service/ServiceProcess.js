import React, { memo } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { kitchenProcessSteps } from "../../Data/ServiceData/KitchenData";

const ServiceProcess = () => {
  return (
    <Box 
      component="section" 
      className="comp-color comp-space"
      sx={{ py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700
          }}
        >
          Our Process
        </Typography>
        
        <Typography 
          variant="h3" 
          align="center"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            my: 2,
            color: 'text.secondary'
          }}
        >
          Refresh Your Home Without a Full Renovation
        </Typography>

        <Grid 
          container 
          spacing={3} 
          sx={{ mt: 2 }}
          justifyContent="center"
        >
          {kitchenProcessSteps.map((step) => (
            <Grid item xs={12} sm={6} md={4} key={step.id}>
              <Box 
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <Typography
                  variant="h5"
                  className="kitchen-icon-bg"
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: 1,
                    textAlign: 'center',
                    my: 2,
                    fontWeight: 700
                  }}
                >
                  {step.id}
                </Typography>
                
                <Typography 
                  variant="h6" 
                  align="center"
                  sx={{ fontWeight: 600 }}
                >
                  {step.title}
                </Typography>
                
                <Typography 
                  align="center"
                  sx={{ 
                    py: 2,
                    color: 'text.secondary'
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(ServiceProcess);
