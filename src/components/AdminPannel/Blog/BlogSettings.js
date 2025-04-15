"use client";

import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import BlogMenu from "./BlogMenu";
import BlogModal from "./BlogModal";
import { MdEdit, MdDelete } from "react-icons/md";
import {
  fetchBlogs,
  deleteBlog,
} from "../../../lib/services/BlogService/BlogsService";
import { Button } from "@mui/material";

const BlogSettings = () => {
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editBlog, setEditBlog] = useState(null);

  const handleEditClick = (blog) => {
    setEditBlog(blog);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setEditBlog(null);
    }, 300);
  };

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogsData = await fetchBlogs();
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  const handleBlogSave = (newBlog) => {
    if (editBlog) {
      // Update the blog in the list if we're editing
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog._id === newBlog._id ? newBlog : blog))
      );
    } else {
      // Add new blog to the list
      setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    try {
      await deleteBlog(blogId);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
    } catch (error) {
      console.log("error while deleting blog ", error);
    }
  };
  return (
    <div className="component-bg-color p-4">
      <div className="d-sm-flex d-flex flex-row heading-container">
        <h2 className=" my-3">Blog management</h2>
      </div>
      <BlogMenu />
      <div className="table-container">
        <div className="add-blog-btn">
          <button
            className="custom-button rounded d-flex  cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <span className="postion-relative bottom-8">
              <IoIosAdd size={30} />
            </span>
            Add Blog
          </button>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div>
              <BlogModal
                onCloseModal={handleCloseModal}
                onBlogSave={handleBlogSave}
                editBlog={editBlog}
              />
            </div>
          </div>
        )}
        {loading ? (
          <div>Loading blogs...</div>
        ) : (
          <table className="table table-striped table-responsive">
            <thead>
              <tr>
                <th>Priority</th>
                <th>Blog Topic</th>
                <th>Date</th>
                <th>Published By</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-capitalize">
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <tr key={blog?._id}>
                    <td>{index + 1}</td>
                    <td>{blog?.blogTopic || "No Title"}</td>
                    <td>{new Date(blog?.createdAt).toLocaleDateString()}</td>
                    <td>{blog?.publishedBy || "Unknown"}</td>
                    <td>{blog?.status}</td>
                    <td>
                      <div className="d-flex flex-row gap-2">
                        <button onClick={() => handleEditClick(blog)}>
                          <MdEdit />
                        </button>
                        <button onClick={() => handleDeleteBlog(blog?._id)}>
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No blogs available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BlogSettings;
