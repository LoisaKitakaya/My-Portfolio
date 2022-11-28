import { Badge, Pagination } from "@mantine/core";
import { useState } from "react";

const RepoStats = ({ myRepos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

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
                <Badge
                  key={index}
                  variant="outline"
                  radius="sm"
                  size="xl"
                  className="my-4 w-2/4 shadow-md hover:cursor-pointer hover:bg-slate-300 duration-200 ease-linear"
                >
                  {repo.full_name}
                </Badge>
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
    </>
  );
};

export default RepoStats;
