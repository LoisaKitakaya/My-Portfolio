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

  const getAllRepos = async () => {
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
          <Tabs defaultValue="intro" id="repo-top">
            <Tabs.List>
              <Tabs.Tab value="intro" icon={<IconSeeding size={16} />}>
                What's this about?
              </Tabs.Tab>
              <Tabs.Tab value="profile" icon={<IconMoodCrazyHappy size={16} />}>
                My Profile
              </Tabs.Tab>
              <div onClick={() => getAllRepos()}>
                <Tabs.Tab value="repos" icon={<IconBrandGit size={16} />}>
                  My Repos
                </Tabs.Tab>
              </div>
            </Tabs.List>
            <Tabs.Panel value="intro" pt="xl">
              <div className="mx-2 mb-16 w-3/5">
                <p className="mb-4 text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                  repudiandae dolores consectetur a amet distinctio. Obcaecati,
                  accusamus. Placeat numquam, optio, nobis saepe dolor
                  temporibus labore quasi molestias sequi quos corporis.
                </p>
                <p className="mb-4 text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                  repudiandae dolores consectetur a amet distinctio. Obcaecati,
                  accusamus. Placeat numquam, optio, nobis saepe dolor
                  temporibus labore quasi molestias sequi quos corporis.
                </p>
                <p className="mb-4 text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                  repudiandae dolores consectetur a amet distinctio. Obcaecati,
                  accusamus. Placeat numquam, optio, nobis saepe dolor
                  temporibus labore quasi molestias sequi quos corporis.
                </p>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="profile" pt="xl">
              <div className="mx-2">Profile tab content</div>
            </Tabs.Panel>
            <Tabs.Panel value="repos" pt="xl">
              <RepoStats myRepos={myRepos} />
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
