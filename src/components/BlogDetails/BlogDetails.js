"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import axios from "axios";
const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_API_URL;

const BlogDetail = ({ slug }) => {
  const [blog, setBlog] = useState(null);
 

  const getExcerpt = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };

  const getBlogDetails = async () => {
    try {
      const blogData = await axios.get(`/api/blog/${slug}`);

      setBlog(blogData.data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      getBlogDetails();
    }
  }, [slug]);

  return (
    <Box className="blog-detail-page">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Box
              className="blog-detail-header"
              sx={{
                background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                color: "white",
                p: 4,
                borderRadius: 2,
                mb: 4,
              }}
            >
              <Typography
                variant="h3"
                className="blog-detail-title"
                sx={{
                  fontSize: "2.5rem",
                  lineHeight: 1.2,
                  mb: 3,
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {blog?.blogTopic}
              </Typography>

              <Box
                className="blog-meta"
                sx={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  {new Date(blog?.createdAt).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>

            <Box className="blog-detail-image ">
              <img
                src={`${BASE_IMAGE_URL}/${blog?.uploadImage.replace(
                  "\\",
                  "/"
                )}`}
                alt={blog?.blogTopic}
              />
            </Box>

            <Box className="blog-content">
              {/* {blog?.blogDescription || "No description available."} */}
              <p
                      dangerouslySetInnerHTML={{
                        __html:
                          blog?.blogDescription || "No description available.",
                      }}
                    />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogDetail;
