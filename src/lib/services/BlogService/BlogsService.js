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

export const updateBlog = async (blogId, updatedBlogData) => {
  const url = `${BLOG_API_ROUTES.BLOG_ROUTE}/${blogId}`;
  const formData = new FormData();

  formData.append("blogTopic", updatedBlogData.blogTopic);
  formData.append("blogCategory", updatedBlogData.blogCategory);
  formData.append("keywords", updatedBlogData.keywords);
  formData.append("uploadImage", updatedBlogData.uploadImage); // This should be the file object
  formData.append("videoUrl", updatedBlogData.videoUrl);
  formData.append("blogDescription", updatedBlogData.blogDescription);
  formData.append("status", updatedBlogData.status);

  //console.log("Updating blog with data:", updatedBlogData);

  const response = await axios.put(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  //console.log(response.data, "update");
  return response.data;
};

export const deleteBlog = async (blogId) => {
  const url = `${BLOG_API_ROUTES.BLOG_ROUTE}?id=${blogId}`;

  try {
    const response = await axios.delete(url);
    console.log(response, "Delete");
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
