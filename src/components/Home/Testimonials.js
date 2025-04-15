import React, { memo } from "react";
import { Box, Container, Typography, Card, CardContent, Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    location: "Perarland",
    comment: "Exceptional service! The team was professional and completed our renovation project ahead of schedule.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    location: "Houston, TX",
    comment: "A2Z Home Solutions has been our go-to contractor for all our properties. Their work is consistently excellent.",
    rating: 5
  },
  {
    name: "Michael Brown",
    location: "Kety, TX",
    comment: "The attention to detail and quality of work exceeded our expectations. Highly recommended!",
    rating: 5
  },
  {
    name: "Emily Davis",
    location: "Suger land, TX",
    comment: "Outstanding craftsmanship and customer service. They transformed our commercial space beautifully.",
    rating: 5
  },
  {
    name: "Robert Wilson",
    location: "Houston, TX",
    comment: "Very impressed with their professionalism and attention to detail. The kitchen remodel turned out perfect.",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    location: "Houston, TX",
    comment: "A reliable team that delivers quality work consistently. My clients are always satisfied with their services.",
    rating: 5
  }
];

const TestimonialCard = memo(({ testimonial }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      p: 3,
      mx: 1,
    }}
  >
    <FormatQuoteIcon
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        color: "#2196f3",
        opacity: 0.3,
        fontSize: 40,
      }}
    />
    <CardContent>
      <Typography
        variant="body1"
        paragraph
        sx={{ fontStyle: "italic", mb: 3 }}
      >
        "{testimonial.comment}"
      </Typography>
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {testimonial.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {testimonial.location}
        </Typography>
        <Rating
          value={testimonial.rating}
          readOnly
          size="small"
          sx={{ mt: 0.5 }}
        />
      </Box>
    </CardContent>
  </Card>
));

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box component="section" className="comp-space comp-color">
      <Container>
        <Typography variant="h4" component="h2" textAlign="center" mb={6}>
          What Our Clients Say
        </Typography>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <Box key={testimonial.id} sx={{ px: 2 }}>
              <TestimonialCard testimonial={testimonial} />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default memo(Testimonials);
