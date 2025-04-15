import axios from "axios";
import { GUIDE_API_ROUTES } from "../APIURL/Api";

export const saveGuide = async (guideData, status) => {
  const url = `${GUIDE_API_ROUTES.GUIDE_ROUTE}`;

  const formData = new FormData();
  formData.append("guideTopic", guideData.guideTopic);
  formData.append("guideCategory", guideData.guideCategory);
  formData.append("guideKeywords", guideData.guideKeywords);
  formData.append("guideDescription", guideData.guideDescription);
  formData.append("guideVideo", guideData.guideVideo);
  formData.append("status", status || "Draft");

  // Append the image if it exists
  if (guideData.guideImage) {
    formData.append("guideImage", guideData.guideImage);
  }

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the content type to handle file upload
      },
    });
    
    return response.data.data;
  } catch (error) {
    console.error("Error saving guide:", error.response?.data || error.message);
    throw error;
  }
};

export const fetchGuides = async () => {
  const url = `${GUIDE_API_ROUTES.GET_GUIDE}`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Guides:", error);
    throw error;
  }
};

export const fetchGuideBySlug = async (slug) => {
  const url = `${GUIDE_API_ROUTES.FETCH_GUIDE_BY_SLUG}/${slug}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching guides:", error);
    throw error;
  }
};

export const deleteGuide = async (blogId) => {
  const url = `${GUIDE_API_ROUTES.DELETE_GUIDE_BY_ID}?id=${blogId}`;
  try {
    const response = await axios.delete(url);
    console.log(response, "Delete");
  } catch (error) {
    console.error(
      "Error deleting the guide:",
      error.response?.data?.message || error.message
    );
    alert("Failed to delete guide");
  }
};

export const updateGuide = async (guideId, guideData) => {
  const url = `${GUIDE_API_ROUTES.UPDATE_GUIDE}/${guideId}`;
  const formData = new FormData();

  formData.append("guideTopic", guideData.guideTopic);
  formData.append("guideCategory", guideData.guideCategory);
  formData.append("guideKeywords", guideData.guideKeywords);
  formData.append("guideDescription", guideData.guideDescription);
  formData.append("guideVideo", guideData.guideVideo);
  formData.append("status", guideData.status);
  formData.append("guideImage", guideData.guideImage);


  console.log("Updating  guide with data:", guideData);

  const response = await axios.put(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response, "guide");
  return response.data;
};
