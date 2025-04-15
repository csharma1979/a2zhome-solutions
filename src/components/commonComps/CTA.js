"use client";

import React , {useState} from "react";
import { Box, Container, Typography } from "@mui/material";

import EnquiryModal  from "./EnquiryModal"

const CTA = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="comp-space">
      <Container>
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            Ready to Transform Your Home?
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Contact us today for a free consultation
          </Typography>
          <button
            className="custom-button rounded" 
          
            onClick={() => setShowModal(true)}
          >
          Request a Free Quote
          </button>
        </Box>
      </Container>
      <EnquiryModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default CTA;
