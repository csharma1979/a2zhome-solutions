import React, { useState } from 'react';
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';

const MobileDrawer = ({ open, onClose, features }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: '#0d6aa3', fontSize: 32 }} />
          </IconButton>
        </Box>
        <List>
          <ListItem button component={Link} href="/" onClick={onClose}>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button onClick={toggleServices}>
            <ListItemText primary="Services" />
            {servicesOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </ListItem>
          <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {features.map((feature, index) => (
                <ListItem
                  button
                  component={Link}
                  href={feature.link}
                  key={index}
                  onClick={onClose}
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={feature.title} />
                </ListItem>
              ))}
            </List>
          </Collapse>

          <ListItem button component={Link} href="/gallery" onClick={onClose}>
            <ListItemText primary="Gallery" />
          </ListItem>

          <ListItem button component={Link} href="/blog" onClick={onClose}>
            <ListItemText primary="Blog" />
          </ListItem>

          <ListItem button component={Link} href="/contact" onClick={onClose}>
            <ListItemText primary="Contact" />
          </ListItem>

          <ListItem>
            <Typography
              component="a"
              href="tel:+1-832-312-5501"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '1rem',
                backgroundColor: '#0d6aa3',
                padding: '4px 8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: '#095484',
                },
              }}
            >
              +1- 832-312-5501
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;