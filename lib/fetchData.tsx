import authFetch from "./authFetch";

const fetchData = async () => {
  try {
    const response = await authFetch("http://your-api-url/api/protected-route");
    if (response.ok) {
      const data = await response.json();
      // Handle the data
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
