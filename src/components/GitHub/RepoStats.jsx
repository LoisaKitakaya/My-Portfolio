import { Badge, Pagination, Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";

const RepoStats = ({ myRepos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [opened, setOpened] = useState(false);

  const theme = useMantineTheme();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = myRepos.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <div className="flex flex-col mx-2 mb-4">
        {currentPosts ? (
          currentPosts.map((repo, index) => {
            const list = (
              <>
                <div
                  key={index}
                  onClick={() => setOpened(true)}
                  className="my-4"
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
        size="auto"
        withCloseButton={false}
        opened={opened}
        onClose={() => setOpened(false)}
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
        <div className="flex flex-col"></div>
      </Modal>
      {/* graph modal */}
    </>
  );
};

export default RepoStats;
