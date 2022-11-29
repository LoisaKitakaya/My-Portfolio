const Profile = ({ myProfile }) => {
  return (
    <div className="mx-2">
      <img
        className="rounded-md shadow-md w-2/5 border border-zinc-300"
        src={myProfile.avatar_url}
        alt="avatar"
      />
      <hr className="my-4" />
      <p className="text-2xl underline">
        <a href={`${myProfile.html_url}`}>{myProfile.name}</a>
      </p>
      <p className="text-xl text-zinc-500">{myProfile.login}</p>
      <hr className="my-4" />
      <p className="text-lg mb-4 w-fit">
        <span className="font-semibold">Bio </span>➻{" "}
        <span className="italic">{myProfile.bio}</span>
      </p>
      <p className="text-lg mb-4 w-fit">
        <span className="font-semibold">Website </span>➻{" "}
        <span className="italic">
          <a
            href={`${myProfile.blog}`}
            className="text-blue-600 hover:text-blue-700 underline"
          >
            {myProfile.blog}
          </a>
        </span>
      </p>
      <p className="text-lg mb-4 w-fit">
        <span className="font-semibold">Twitter </span>➻{" "}
        <span className="italic">
          <a
            href="https://twitter.com/FreedomLoisa"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            @{myProfile.twitter_username}
          </a>
        </span>
      </p>
      <p className="text-lg mb-4 w-fit">
        <span className="font-semibold">Email </span>➻{" "}
        <span className="italic">{myProfile.email}</span>
      </p>
      <p className="text-lg mb-4 w-fit">
        <span className="font-semibold">Location </span>➻{" "}
        <span className="italic">{myProfile.location}</span>
      </p>
      <p className="text-lg mb-4 w-fit">
        <span className="font-semibold">Public repos </span>➻{" "}
        <span className="italic">{myProfile.public_repos}</span>
      </p>
    </div>
  );
};

export default Profile;
