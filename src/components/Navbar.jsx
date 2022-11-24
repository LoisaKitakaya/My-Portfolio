import { Breadcrumbs } from "@mantine/core";
import SocialMedia from "../components/SocialMedia";

const Navbar = ({ navs }) => {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-3 h-3 text-zinc-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  return (
    <div className="mx-4 flex items-center justify-between">
      {/* breadcrumbs */}
      <Breadcrumbs separator={arrow} className="text-lg">
        {navs}
      </Breadcrumbs>
      {/* breadcrumbs */}

      {/* social media */}
      <SocialMedia />
      {/* social media */}
    </div>
  );
};

export default Navbar;
