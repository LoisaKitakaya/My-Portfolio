import { Badge, Pagination, Modal, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";

import ContributorCommitActivity from "../Charts/ContributorCommitActivity";

const RepoStats = ({ myRepos, octokit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [opened, setOpened] = useState(false);
  const [urlParams, setUrlParams] = useState("");

  const theme = useMantineTheme();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = myRepos.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (opened === false) {
      sessionStorage.clear();
    }
  }, [opened]);

  return (
    <>
      <div className="flex flex-col mx-2 mb-4">
        {currentPosts ? (
          currentPosts.map((repo, index) => {
            const list = (
              <>
                <div
                  className="my-4"
                  key={index}
                  onClick={() => {
                    setOpened(true);

                    setUrlParams(repo.full_name);
                  }}
                >
                  <Badge
                    variant="outline"
                    radius="sm"
                    size="xl"
                    className="shadow-md hover:cursor-pointer hover:bg-slate-300 duration-200 ease-linear w-full"
                  >
                    {repo.full_name}
                  </Badge>
                </div>
              </>
            );

            return list;
          })
        ) : (
          <></>
        )}
      </div>
      <Pagination
        total={Math.ceil(myRepos.length / postsPerPage)}
        page={currentPage}
        withControls={false}
        onChange={setCurrentPage}
        onClick={() => {
          const element = document.getElementById("repo-top");

          element.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="mx-16 mb-8"
      />
      {/* graph modal */}
      <Modal
        size="xl"
        withCloseButton={false}
        opened={opened}
        onClose={() => setOpened(false)}
        transition="fade"
        centered
        transitionDuration={600}
        transitionTimingFunction="ease"
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <ContributorCommitActivity urlParams={urlParams} octokit={octokit} />
      </Modal>
      {/* graph modal */}
    </>
  );
};

export default RepoStats;
