import { Octokit } from "octokit";
import { useState } from "react";
import { Tabs } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconSeeding, IconMoodCrazyHappy, IconBrandGit } from "@tabler/icons";

import Footer from "../components/Footer";
// import GeneralStats from "../components/GitHub/GeneralStats";
import Navbar from "../components/Navbar";
import PageTitle from "../PageTitle";
import RepoStats from "../components/GitHub/RepoStats";
import Profile from "../components/GitHub/Profile";
import loader from "../assets/Loading progress.gif";

const GitHub = ({ fetchData }) => {
  PageTitle("GitHub Stats");

  const octokit = new Octokit({
    auth: process.env.REACT_APP_TOKEN,
  });

  const home = (
    <p className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 rounded-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
      <span className="ml-1">Home</span>
    </p>
  );

  const gitStats = (
    <p className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-teal-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
      <span className="ml-1">Git stats</span>
    </p>
  );

  const navs = [
    { title: home, href: "/" },
    { title: gitStats, href: "" },
  ].map((item, index) => (
    <Link to={item.href} key={index}>
      {item.title}
    </Link>
  ));

  const [myRepos, setMyRepos] = useState([]);
  const [myProfile, setMyProfile] = useState({});
  const [fetching, setFetching] = useState(false);

  const getAllRepos = async () => {
    setFetching(true);
    try {
      const response = await octokit.request(
        "GET /user/repos?per_page=100&sort=updated"
      );
      console.log(response.data);
      setMyRepos(response.data);
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
    setFetching(false);
  };

  const getProfile = async () => {
    setFetching(true);
    try {
      const response = await octokit.request("GET /user");
      console.log(response.data);
      setMyProfile(response.data);
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
    setFetching(false);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-16 p-4">
        {/* navbar */}
        <Navbar navs={navs} />
        {/* navbar */}

        <hr className="border-1 border-zinc-500 my-4" />

        {/* body */}
        <div className="mx-4">
          <h1 className="text-4xl text-zinc-500 mb-4">My GitHub in data</h1>
          <Tabs defaultValue="intro" id="repo-top" className="w-3/5">
            <Tabs.List>
              <Tabs.Tab value="intro" icon={<IconSeeding size={16} />}>
                What's this about?
              </Tabs.Tab>
              <div onClick={() => getProfile()}>
                <Tabs.Tab
                  value="profile"
                  icon={<IconMoodCrazyHappy size={16} />}
                >
                  My Profile
                </Tabs.Tab>
              </div>
              <div onClick={() => getAllRepos()}>
                <Tabs.Tab value="repos" icon={<IconBrandGit size={16} />}>
                  My Repos
                </Tabs.Tab>
              </div>
            </Tabs.List>
            <Tabs.Panel value="intro" pt="xl">
              <div
                className="mx-2"
                style={{
                  height: "425px",
                }}
              >
                <p className="mb-4 text-lg">
                  In an attempt to either give my portfolio website some cool
                  features or just make it more complicated (probably the
                  latter), I have here some statistical visualizations of my
                  GitHub repositories data.
                </p>
                <p className="mb-4 text-lg">
                  Also, I thought it would be cool to include some personal data
                  from my GitHub profile.
                </p>
                <p className="mb-4 text-lg">
                  I To achieve this I have used the{" "}
                  <a
                    className="text-blue-600 hover:text-blue-700 underline"
                    href="https://docs.github.com/en/rest"
                  >
                    GitHub REST API
                  </a>{" "}
                  to get my data (my profile and repos), and{" "}
                  <a
                    className="text-blue-600 hover:text-blue-700 underline"
                    href="https://recharts.org/en-US"
                  >
                    Recharts
                  </a>{" "}
                  to generate graphs to visualize some of the stats from{" "}
                  <span className="text-blue-600">REST API</span>
                </p>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="profile" pt="xl">
              {fetching ? (
                <div className="w-fit mx-auto mt-24 mb-72">
                  <img src={loader} alt="loader" />
                  <p className="text-lg text-center text-blue-600">
                    loading...
                  </p>
                </div>
              ) : (
                <Profile myProfile={myProfile} />
              )}
            </Tabs.Panel>
            <Tabs.Panel value="repos" pt="xl">
              {fetching ? (
                <div className="w-fit mx-auto mt-24 mb-72">
                  <img src={loader} alt="loader" />
                  <p className="text-lg text-center text-blue-600">
                    loading...
                  </p>
                </div>
              ) : (
                <RepoStats myRepos={myRepos} octokit={octokit} />
              )}
            </Tabs.Panel>
          </Tabs>
        </div>
        {/* body */}

        <hr className="border-1 border-zinc-500 my-4" />

        {/* footer */}
        <Footer />
        {/* footer */}
      </div>
    </div>
  );
};

export default GitHub;
