import React, { memo, useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ServiceFaq = ({ data = [] }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box 
      component="section" 
      className="faq-section comp-space"
      sx={{ 
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          textAlign="center" 
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700
          }}
        >
          Frequently Asked Questions (FAQ)
        </Typography>
        
        <Typography 
          variant="h3" 
          align="center" 
          color="text.secondary"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            mb: 6
          }}
        >
          Trusted By Growing Business
        </Typography>

        <Container maxWidth="md">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((faq, index) => (
              <Accordion
                key={faq.question || index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  '&:before': {
                    display: 'none',
                  },
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{
                    '&.Mui-expanded': {
                      minHeight: 48,
                    }
                  }}
                >
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.125rem' }
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Typography 
              textAlign="center" 
              color="text.secondary"
              sx={{ py: 4 }}
            >
              No FAQs available.
            </Typography>
          )}
        </Container>
      </Container>
    </Box>
  );
};

export default memo(ServiceFaq);
