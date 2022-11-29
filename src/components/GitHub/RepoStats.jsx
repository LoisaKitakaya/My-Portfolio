import { Badge, Pagination, Modal, useMantineTheme, Menu } from "@mantine/core";
import { useEffect, useState } from "react";
import ContributorCommitActivity from "../Charts/ContributorCommitActivity";
import LastYearCommitActivity from "../Charts/LastYearCommitActivity";
import WeeklyCommitActivity from "../Charts/WeeklyCommitActivity";

const RepoStats = ({ myRepos, octokit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [wcaOpened, setWcaOpened] = useState(false);
  const [lcaOpened, setLcaOpened] = useState(false);
  const [ccaOpened, setCcaOpened] = useState(false);
  const [urlParams, setUrlParams] = useState("");

  const theme = useMantineTheme();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = myRepos.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (wcaOpened === false || lcaOpened === false || ccaOpened === false) {
      sessionStorage.clear();
    }
  }, [ccaOpened, lcaOpened, wcaOpened]);

  return (
    <>
      <div className="flex flex-col mx-2 mb-4">
        {currentPosts ? (
          currentPosts.map((repo, index) => {
            const list = (
              <>
                <Menu
                  key={index}
                  shadow="md"
                  withArrow
                  trigger="hover"
                  openDelay={100}
                  closeDelay={200}
                  position="right"
                  width="auto"
                >
                  <Menu.Target>
                    <Badge
                      variant="outline"
                      radius="sm"
                      size="xl"
                      className="shadow-md hover:cursor-pointer hover:bg-slate-300 duration-200 ease-linear w-full my-4"
                    >
                      {repo.full_name}
                    </Badge>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <div
                      onClick={() => {
                        setWcaOpened(true);

                        setUrlParams(repo.full_name);
                      }}
                    >
                      <Menu.Item>Weekly commit activity</Menu.Item>
                    </div>
                    <div
                      onClick={() => {
                        setLcaOpened(true);

                        setUrlParams(repo.full_name);
                      }}
                    >
                      <Menu.Item>Last year commit activity</Menu.Item>
                    </div>
                    <div
                      onClick={() => {
                        setCcaOpened(true);

                        setUrlParams(repo.full_name);
                      }}
                    >
                      <Menu.Item>Contributor commit activity</Menu.Item>
                    </div>
                  </Menu.Dropdown>
                </Menu>
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
        opened={wcaOpened}
        onClose={() => setWcaOpened(false)}
        transition="fade"
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
        <div className="flex flex-col">
          <WeeklyCommitActivity urlParams={urlParams} octokit={octokit} />
        </div>
      </Modal>

      <Modal
        size="xl"
        withCloseButton={false}
        opened={lcaOpened}
        onClose={() => setLcaOpened(false)}
        transition="fade"
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
        <div className="flex flex-col">
          <LastYearCommitActivity urlParams={urlParams} octokit={octokit} />
        </div>
      </Modal>

      <Modal
        size="xl"
        withCloseButton={false}
        opened={ccaOpened}
        onClose={() => setCcaOpened(false)}
        transition="fade"
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
        <div className="flex flex-col">
          <ContributorCommitActivity urlParams={urlParams} octokit={octokit} />
        </div>
      </Modal>
      {/* graph modal */}
    </>
  );
};

export default RepoStats;
