import { useEffect } from "react";

const GeneralStats = ({ octokit }) => {
  const getMetrics = async () => {
    try {
      const response = await octokit.request(
        "GET /repos/LoisaKitakaya/Pollar/stats/participation"
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
  };

  useEffect(() => {
    getMetrics();
  });

  return null;
};

export default GeneralStats;
