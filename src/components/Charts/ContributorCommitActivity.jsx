import { useEffect, useState, useRef } from "react";

import loader from "../../assets/Loading progress.gif";

const ContributorCommitActivity = ({ urlParams, octokit }) => {
  const [fetching, setFetching] = useState(false);

  const contributorCommitActivity = async () => {
    setFetching(true);
    try {
      const response = await octokit.request(
        `GET /repos/${urlParams}/stats/contributors`
      );
      console.log(response.data);

      const cca = [...response.data];

      sessionStorage.setItem("cca", JSON.stringify(cca));
      console.log(cca);
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
    setFetching(false);
  };

  const ccaData = useRef([]);

  useEffect(() => {
    if (!sessionStorage.getItem("cca")) {
      contributorCommitActivity();
    } else {
      ccaData.current = [...JSON.parse(sessionStorage.getItem("cca"))] || [];
    }
  });

  return (
    <div className="rounded-md shadow-md border border-zinc-300 my-4 p-4 bg-slate-100">
      {fetching ? (
        <div className="w-fit mx-auto my-24">
          <img src={loader} alt="loader" />
          <p className="text-lg text-center text-blue-600">loading...</p>
        </div>
      ) : (
        <>
          <h1 className="text-xl mb-4">Contributor commit activity</h1>
        </>
      )}
    </div>
  );
};

export default ContributorCommitActivity;
