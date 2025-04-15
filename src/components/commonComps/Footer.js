"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { navbarFeatures } from "../../Data/Navbar";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        backgroundColor: '#0d6aa3',
        color: 'white',
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              A2Z Home Solutions
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8 }}>
              We provide expert Kitchen, Plumbing, and HVAC services with fast,
              reliable, and affordable solutions. From repairs to installations,
              our skilled technicians ensure quality workmanship and customer
              satisfaction. Contact us today for prompt service and a free
              estimate!
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton 
                aria-label="Twitter" 
                sx={{ 
                  mr: 1,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                <TwitterIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton 
                aria-label="LinkedIn"
                sx={{ 
                  mr: 1,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                <LinkedInIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton 
                aria-label="Facebook"
                sx={{ 
                  mr: 1,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                <FacebookIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton 
                aria-label="Instagram"
                sx={{ 
                  mr: 1,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                <InstagramIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {navbarFeatures.slice(0, 6).map((feature, index) => (
                <Link
                  href={feature.link}
                  key={index}
                  sx={{ 
                    mb: 1.5,
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  {feature.title}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: "flex", flexDirection: "column", mt: { xs: 0, md: 7 } }}>
              {navbarFeatures.slice(6, 12).map((feature, index) => (
                <Link
                  href={feature.link}
                  key={index}
                  sx={{ 
                    mb: 1.5,
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  {feature.title}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: "flex", flexDirection: "column", mt: { xs: 0, md: 7 } }}>
              {navbarFeatures.slice(12, 18).map((feature, index) => (
                <Link
                  href={feature.link}
                  key={index}
                  sx={{ 
                    mb: 1.5,
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  {feature.title}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Others
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {[
                // { title: 'About', link: '/about' },
                { title: 'Blog', link: '/blog' },
                { title: 'Contact', link: '/contact' },
                // { title: 'Terms & Conditions', link: '/terms-conditions' },
                // { title: 'Privacy Policy', link: '/privacy-policy' }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  sx={{ 
                    mb: 1.5,
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box 
          sx={{ 
            mt: 6, 
            pt: 3, 
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: 'center'
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} A2Z Home Solutions. All rights reserved
            | Technology Partner -{" "}
            <Link 
              href="https://fritado.com/" 
              sx={{ 
                color: "white",
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Fritado AI
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
