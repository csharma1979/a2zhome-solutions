// Move this file if it's not already in this location
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Menu, MenuItem, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navigation = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleServicesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (path) => {
    setAnchorEl(null); // Close the menu first
    setTimeout(() => {
      router.push(path); // Navigate after menu closes
    }, 100);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <Link href="/" prefetch={true} scroll={false}>
        Home
      </Link>
      
      <Button
        aria-controls="services-menu"
        aria-haspopup="true"
        onClick={handleServicesClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Services
      </Button>
      <Menu
        id="services-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionProps={{ timeout: 100 }}
        PaperProps={{
          sx: { 
            mt: 1,
            maxHeight: '80vh',
            width: '300px'
          }
        }}
      >
        {[
          'Plumbing',
          'HVAC',
          'Electrical',
          'Painting',
          'Flooring',
          'Renovation'
        ].map((service) => (
          <MenuItem
            key={service}
            onClick={() => handleMenuItemClick(`/services/${service.toLowerCase()}`)}
            sx={{ py: 1 }}
          >
            {service}
          </MenuItem>
        ))}
      </Menu>

      <Link href="/about" prefetch={true} scroll={false}>
        About
      </Link>
      <Link href="/contact" prefetch={true} scroll={false}>
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;