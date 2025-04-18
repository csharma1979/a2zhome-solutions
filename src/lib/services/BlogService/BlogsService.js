import axios from "axios";
import { BLOG_API_ROUTES } from "../APIURL/Api";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const [month, day, year] = formattedDate.replace(",", "").split(" ");

  return (
    <>
      {month}
      <> | </>
      {day}
      <> | </>
      {year}
    </>
  );
};

export const saveBlog = async (blogData, status) => {
  const url = `${BLOG_API_ROUTES.BLOG_ROUTE}`;
  const formData = new FormData();
  formData.append("blogTopic", blogData.blogTopic);
  formData.append("blogCategory", blogData.blogCategory);
  formData.append("keywords", blogData.keywords);

  if (blogData.uploadImage) {
    formData.append("uploadImage", blogData.uploadImage);
  }

  formData.append("videoUrl", blogData.videoUrl);
  formData.append("blogDescription", blogData.blogDescription);
  formData.append("status", status); // 'Draft' or 'Published'

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data, "response save");
    return response.data.data;
  } catch (error) {
    console.error("Error saving blog:", error.response?.data || error.message);
    throw error;
  }
};

export const fetchBlogs = async () => {
  const url = `${BLOG_API_ROUTES.BLOG_ROUTE}`;
  try {
    const response = await axios.get(url);

    return response.data.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const updateBlog = async (slug, blogData) => {
  const res = await fetch(`${BLOG_API_ROUTES.BLOG_ROUTE}/${slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  if (!res.ok) {
    throw new Error("Failed to update blog");
  }

  const data = await res.json();
  return data.data;
};

export const deleteBlog = async (blogId) => {
  const url = `${BLOG_API_ROUTES.BLOG_ROUTE}?id=${blogId}`;

  try {
    const response = await axios.delete(url);
  } catch (error) {
    console.error(
      "Error deleting the blog:",
      error.response?.data?.message || error.message
    );
    alert("Failed to delete blog");
  }
};

export const fetchLatestBlogs = async () => {
  const url = `/api/blog/latest`;
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    throw error;
  }
};
