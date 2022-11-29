import { useEffect, useState, useRef } from "react";
import loader from "../../assets/Loading progress.gif";

const LastYearCommitActivity = ({ urlParams, octokit }) => {
  const [fetching, setFetching] = useState(false);

  const lastYearCommitActivity = async () => {
    setFetching(true);
    try {
      const response = await octokit.request(
        `GET /repos/${urlParams}/stats/commit_activity`
      );
      console.log(response.data);

      const lca = [...response.data];

      sessionStorage.setItem("lca", JSON.stringify(lca));
      console.log(lca);
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
    setFetching(false);
  };

  const lcaData = useRef([]);

  useEffect(() => {
    if (!sessionStorage.getItem("lca")) {
      lastYearCommitActivity();
    } else {
      lcaData.current = [...JSON.parse(sessionStorage.getItem("lca"))] || [];
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

export default LastYearCommitActivity;
