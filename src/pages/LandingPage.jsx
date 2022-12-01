import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";

const LandingPage = () => {
  PageTitle("Home");
  
  return (
    <div className="py-44 h-screen">
      <div className="rounded-md shadow-md border border-zinc-300 px-4 py-8 w-2/4 flex items-center bg-white mx-auto">
        <img
          className="rounded-full border border-zinc-300 w-1/4 mx-auto"
          src="https://res.cloudinary.com/dit0fii18/image/upload/v1669343217/documents/Me/78635122_erhvrv.png"
          alt="me"
        />
        <div className="p-4 w-3/5 mx-auto">
          <h3 className="text-2xl mb-4">Freedom Loisa</h3>
          <p>
            I'm a software engineer in Nairobi. I love building open-source
            projects and writing about what I learn.
          </p>
        </div>
      </div>
      <hr className="border border-dashed border-zinc-400 w-2/4 flex mx-auto my-4" />
      <div className="flex items-center justify-evenly w-2/4 mx-auto">
        <Link
          to="/about"
          className="button py-1 px-4 bg-white hover:bg-zinc-100 rounded-md shadow-md border border-zinc-300 duration-200 ease-linear flex items-center"
        >
          <span className="text-lg text-zinc-600">About</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mx-1 text-yellow-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        </Link>
        <Link
          to="/stats"
          className="button py-1 px-4 bg-white hover:bg-zinc-100 rounded-md shadow-md border border-zinc-300 duration-200 ease-linear flex items-center"
        >
          <span className="text-lg text-zinc-600">Git stats</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mx-1 text-teal-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
            />
          </svg>
        </Link>
        <Link
          to="/blog"
          className="button py-1 px-4 bg-white hover:bg-zinc-100 rounded-md shadow-md border border-zinc-300 duration-200 ease-linear flex items-center"
        >
          <span className="text-lg text-zinc-600">Blog</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mx-1 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>
        </Link>
        <Link
          to="/projects"
          className="button py-1 px-4 bg-white hover:bg-zinc-100 rounded-md shadow-md border border-zinc-300 duration-200 ease-linear flex items-center"
        >
          <span className="text-lg text-zinc-600">Projects</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mx-1 text-emerald-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
