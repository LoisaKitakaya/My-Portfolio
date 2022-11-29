import { useEffect, useState, useRef } from "react";
import loader from "../../assets/Loading progress.gif";

const WeeklyCommitActivity = ({ urlParams, octokit }) => {
  const [fetching, setFetching] = useState(false);

  const getWeeklyCommitActivity = async () => {
    setFetching(true);
    try {
      const response = await octokit.request(
        `GET /repos/${urlParams}/stats/code_frequency`
      );
      console.log(response.data);

      const wca = [...response.data];

      sessionStorage.setItem("wca", JSON.stringify(wca));
      console.log(wca);
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
    setFetching(false);
  };

  const wcaData = useRef([]);

  useEffect(() => {
    if (!sessionStorage.getItem("wca")) {
      getWeeklyCommitActivity();
    } else {
      wcaData.current = [...JSON.parse(sessionStorage.getItem("wca"))] || [];
    }
  });

  return (
    <div className="rounded-md shadow-md border border-zinc-300 my-4 p-4 bg-slate-200">
      {fetching ? (
        <div className="w-fit mx-auto my-24">
          <img src={loader} alt="loader" />
          <p className="text-lg text-center text-blue-600">loading...</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default WeeklyCommitActivity;
