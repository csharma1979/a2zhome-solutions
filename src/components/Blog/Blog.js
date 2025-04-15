"use client";

import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import ServiceBanner from "../Service/ServiceBanner";
import { Container, Box, Typography } from "@mui/material";
import {
  fetchBlogs,
  formatDate,
} from "../../lib/services/BlogService/BlogsService";
const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_API_URL;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const getExcerpt = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };

  const getBlogs = async () => {
    try {
      const blogsData = await fetchBlogs();
      console.log(blogsData);
      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Box className="home-page">
      <ServiceBanner
        title="Inspiring Ideas & Expert Tips for Your Home Projects"
        subtitle="Explore the latest trends, guides, and insights to enhance your living space"
      />
      <Container maxWidth="lg" className="comp-space">
        <div className="row ">
          {blogs?.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog._id} className="col-lg-4 col-md-6">
                <div className="single-blog-list style-3">
                  <div className="thumb">
                    <img
                      src={`${BASE_IMAGE_URL}/${blog.uploadImage.replace(
                        "\\",
                        "/"
                      )}`}
                      alt={blog.blogTopic}
                      width={500}
                      height={300}
                    />
                  </div>
                  <div className="details">
                    <ul className="blog-meta">
                      <li className="blog-topic-author">
                        {blog.publishedBy || "Admin"}
                      </li>
                      <li className="blog-topic-date">
                        <FaCalendarAlt /> {formatDate(blog.createdAt)}
                      </li>
                    </ul>
                    <Link href={`/blog-details/${blog.slug}`}>
                      <h5 className="mb-1">
                        {getExcerpt(blog.blogTopic || "No Title", 14)}
                      </h5>
                    </Link>

                    <p
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: getExcerpt(
                          blog.blogDescription || "No description available.",
                          15
                        ),
                      }}
                    />
                    <div className="text-end pe-2">
                      <Link
                        href={`/blog-details/${blog.slug}`}
                        className="read-more-text"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No blogs available.</p>
            </div>
          )}
        </div>
      </Container>
    </Box>
  );
};

export default Blog;
