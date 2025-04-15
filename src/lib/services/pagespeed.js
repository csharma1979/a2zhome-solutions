export const fetchPageSpeedData = async (
    modifiedUrlInput,
    apiKey,
    strategy = "mobile"
  ) => {
    const apiUrl =
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
    const dynamicEndpoint = `${apiUrl}?url=${encodeURIComponent(
      modifiedUrlInput
    )}&key=${apiKey}&strategy=${strategy}`;
    try {
      const response = await fetch(dynamicEndpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching PageSpeed data:", error);
      throw error;
    }
  };