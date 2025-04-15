import React, { useState } from "react";
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent,
  Menu,
  MenuItem,
  Button,
  Box,
  Popover,
  Paper
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { servicesList } from './servicesList';  // Move the services list to a separate file

const Services = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="comp-space">
      <Container>
        <Button
          aria-controls={open ? 'services-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ mr: 2 }}
        >
          Services
        </Button>
        <Popover
          id="services-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          PaperProps={{
            sx: {
              width: '80vw',
              maxWidth: '1200px',
              p: 3,
              mt: 1,
              maxHeight: '400px',
              overflowY: 'auto'
            }
          }}
        >
          <Grid 
            container 
            spacing={2} 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridTemplateRows: 'repeat(3, auto)',
              gap: 2,
              alignItems: 'start'
            }}
          >
            {servicesList.map((service, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  p: 1,
                  minWidth: '150px',
                  '&:hover': {
                    bgcolor: 'action.hover',
                    borderRadius: 1,
                    cursor: 'pointer'
                  }
                }}
                onClick={handleClose}
              >
                <Box sx={{ color: 'primary.main', minWidth: '24px' }}>
                  {service.icon}
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Popover>
        <Typography variant="h4" component="h2" textAlign="center" mb={6}>
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {servicesList.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '20px',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    cursor: 'pointer',
                    boxShadow: 3
                  }
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  align="center"
                  sx={{ fontSize: '1rem' }}
                >
                  {service.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;