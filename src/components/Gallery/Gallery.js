"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import ServiceBanner from "../Service/ServiceBanner";
import { Box, Typography, Container, Grid, ImageList, ImageListItem } from "@mui/material";
import { services } from "./galleryData"; // Move services array to a separate file

const GallerySection = React.memo(({ title, images, onImageClick }) => {
  const cols = useCallback((width) => {
    if (width < 600) return 2;
    if (width < 960) return 3;
    return 6;
  }, []);

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 3,
          fontWeight: 600,
          color: '#333'
        }}
      >
        {title}
      </Typography>
      <ImageList 
        cols={cols(window.innerWidth)}
        gap={16}
        sx={{ overflow: 'hidden' }}
      >
        {images.map((img, index) => (
          <ImageListItem 
            key={`${title}-${index}`}
            onClick={() => onImageClick(img, index)}
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}
          >
            <Image
              src={img}
              alt={`${title} ${index + 1}`}
              width={300}
              height={200}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              loading="lazy"
              quality={75}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
});

// Also update the ImageModal component's Image
const ImageModal = React.memo(({ src, onClose, onNext, onPrev, currentIndex, totalImages }) => (
  <div 
    className="image-modal" 
    onClick={onClose}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '80px 20px 20px' // Added top padding for header
    }}
  >
    <button
      onClick={(e) => { e.stopPropagation(); onPrev(); }}
      style={{
        position: 'absolute',
        left: '20px',
        background: 'rgba(255,255,255,0.3)',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        color: 'white',
        fontSize: '24px'
      }}
    >
      ←
    </button>
    
    <Image
      src={src}
      alt="Enlarged View"
      width={1200}
      height={800}
      style={{ 
        maxWidth: '90vw',
        maxHeight: '80vh',
        objectFit: 'contain'
      }}
      quality={100}
      priority
    />
    
    <button
      onClick={(e) => { e.stopPropagation(); onNext(); }}
      style={{
        position: 'absolute',
        right: '20px',
        background: 'rgba(255,255,255,0.3)',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        color: 'white',
        fontSize: '24px'
      }}
    >
      →
    </button>
    
    <div style={{
      position: 'absolute',
      bottom: '20px',
      color: 'white',
      background: 'rgba(0,0,0,0.5)',
      padding: '5px 10px',
      borderRadius: '15px'
    }}>
      {currentIndex + 1} / {totalImages}
    </div>
  </div>
));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentServiceImages, setCurrentServiceImages] = useState([]);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const handleImageClick = useCallback((img, serviceImages, index) => {
    setSelectedImage(img);
    setCurrentServiceImages(serviceImages);
    setCurrentImageIndex(index);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === currentServiceImages.length - 1 ? 0 : prev + 1
    );
    setSelectedImage(currentServiceImages[currentImageIndex === currentServiceImages.length - 1 ? 0 : currentImageIndex + 1]);
  }, [currentImageIndex, currentServiceImages]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentServiceImages.length - 1 : prev - 1
    );
    setSelectedImage(currentServiceImages[currentImageIndex === 0 ? currentServiceImages.length - 1 : currentImageIndex - 1]);
  }, [currentImageIndex, currentServiceImages]);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
    setCurrentServiceImages([]);
  }, []);

  return (
    <Box component="main">
      <ServiceBanner 
        title="Project Gallery" 
        subtitle="Discover our extensive portfolio showcasing exceptional craftsmanship and attention to detail. Each project reflects our commitment to delivering outstanding results for our valued clients."
      />
      
      {services.map((service) => (
        <GallerySection
          key={service.name}
          title={service.name}
          images={service.images}
          onImageClick={(img, index) => handleImageClick(img, service.images, index)}
        />
      ))}

      {selectedImage && (
        <ImageModal 
          src={selectedImage} 
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={currentImageIndex}
          totalImages={currentServiceImages.length}
        />
      )}
    </Box>
  );
};

export default React.memo(Gallery);
