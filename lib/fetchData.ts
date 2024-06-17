import authFetch from "./authFetch";

const fetchData = async () => {
  try {
    const response = await authFetch(
      "https://obeisant-ear-ordinary-selection-production.pipeops.app/api/v1"
    );
    if (response.ok) {
      const data = await response.json();
      // Handle the data
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
