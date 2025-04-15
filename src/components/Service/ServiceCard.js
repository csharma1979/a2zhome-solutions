import React, { memo } from "react";
import { Button, Box, Container, Grid, Typography, Paper } from "@mui/material";
import Link from "next/link";

const ServiceCard = ({ title, subtitle, data, showReadMore = true }) => {
  return (
    <Container 
      component="section"
      maxWidth="lg" 
      sx={{ 
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 3 }
      }}
    >
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

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {data.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={feature.title || index}>
            <Paper 
              className="feature-card"
              elevation={2}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}
            >
              <Box 
                className="feature-icon"
                sx={{ mb: 2 }}
              >
                {feature.icon}
              </Box>
              
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                {feature.title}
              </Typography>
              
              <Typography 
                color="text.secondary"
                sx={{ flex: 1 }}
              >
                {feature.description}
              </Typography>
              
              {showReadMore && feature?.link && (
                <Link 
                  href={feature.link} 
                  prefetch={false}
                  style={{ textDecoration: 'none' }}
                >
                  <Button 
                    className="color-blue"
                    sx={{ 
                      mt: 2,
                      '&:hover': {
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    Read more →
                  </Button>
                </Link>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default memo(ServiceCard);
