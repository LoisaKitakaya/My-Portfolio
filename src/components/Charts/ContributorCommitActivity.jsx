import { useEffect, useState, useRef } from "react";

import loader from "../../assets/Loading progress.gif";
import CcaChart from "./cca/CcaChart";

const ContributorCommitActivity = ({ urlParams, octokit }) => {
  const [fetching, setFetching] = useState(false);
  const ccaData = useRef([]);

  const contributorCommitActivity = async () => {
    setFetching(true);
    try {
      const response = await octokit.request(
        `GET /repos/${urlParams}/stats/contributors`
      );
      console.log(response.data);

      const cca = [];

      response.data[0].weeks.map((arr) => {
        cca.push({
          timestamp: `${arr.w}`,
          additions: arr.a,
          deletions: arr.d,
          commits: arr.c,
        });

        return cca;
      });

      sessionStorage.setItem("cca", JSON.stringify(cca));
      ccaData.current = [...JSON.parse(sessionStorage.getItem("cca"))] || [];
      console.log(ccaData.current);
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
    setFetching(false);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("cca")) {
      contributorCommitActivity();
    }
  });

  return (
    <div className="my-4 p-4">
      {fetching ? (
        <div className="w-fit mx-auto my-24">
          <img src={loader} alt="loader" />
          <p className="text-lg text-center text-blue-600">loading...</p>
        </div>
      ) : (
        <>
          <h1 className="text-xl mb-8">My commit activity</h1>
          <CcaChart chartData={ccaData.current} />
          <div className="mx-auto w-3/4">
            <p className="text-lg mb-4">
              This graph represents the weekly hash of a contributor's
              activities, i.e. additions, deletions, and commits, since the
              creation of the referenced repository.{" "}
              <a
                href="https://docs.github.com/en/rest/metrics/statistics?apiVersion=2022-11-28#get-all-contributor-commit-activity"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Ref
              </a>
              .
            </p>
            <p className="text-lg mb-8">
              Also worth noting. The X-Axis represents the start of a new week,
              given as a{" "}
              <a
                href="http://en.wikipedia.org/wiki/Unix_time"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Unix timestamp
              </a>
              .
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ContributorCommitActivity;
