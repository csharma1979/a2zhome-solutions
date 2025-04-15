import React, { memo } from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const WhyChooseUs = ({ title, subtitle, data }) => {
  return (
    <Box 
      component="section" 
      className="comp-space"
      sx={{ 
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default' 
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700
          }}
        >
          {title}
        </Typography>

        <Typography 
          variant="h3" 
          align="center" 
          color="text.secondary"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            mb: 6,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          {subtitle}
        </Typography>

        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.title || index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <Box 
                  className="feature-icon"
                  sx={{ 
                    mb: 2,
                   // color: 'primary.main',
                    fontSize: '2.5rem'
                  }}
                >
                  {item.icon}
                </Box>

                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  {item.title}
                </Typography>

                <Typography 
                  color="text.secondary"
                  sx={{ 
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(WhyChooseUs);
