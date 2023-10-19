import { Commit } from "./commit.types";
import dayjs from "dayjs";

type CommitProps = {
  commit: Commit;
  previousCommit?: Commit;
};

function CommitItem({ commit, previousCommit }: CommitProps) {
  function formatTimeAgo(commitDate: Date): string {
    const timeDifference = new Date().getTime() - commitDate.getTime();
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (daysAgo >= 30) {
      const monthsAgo = Math.floor(daysAgo / 30);
      return `committed ${monthsAgo} months ago`;
    } else if (daysAgo >= 1) {
      return `committed ${daysAgo} days ago`;
    } else if (hoursAgo >= 1) {
      return `committed ${hoursAgo} hours ago`;
    } else if (minutesAgo >= 1) {
      return `committed ${minutesAgo} minutes ago`;
    } else {
      return `committed less than a minute ago`;
    }
  }

  function formatDate(date: Date): string {
    return dayjs(date).format("YYYY-MM-DD");
  }

  const commitDate = new Date(commit.commit.committer.date);

  return (
    <>
      {!previousCommit ||
      formatDate(new Date(previousCommit.commit.committer.date)) !==
        formatDate(commitDate) ? (
        <span className="my-4 block">
          Commits on {dayjs(commitDate).format("MMM DD, YYYY")}
        </span>
      ) : null}

      <div className="rounded-lg p-4 border border-light-gray text-sm flex justify-between hover:bg-light-gray">
        <div>
          <span className="font-bold mb-1 block">{commit.commit.message}</span>

          <figure className="flex gap-1">
            <img
              className="rounded-full aspect-square w-5 h-5"
              src={commit.author.avatar_url}
              alt="profile pic"
            />
            <figcaption className="flex gap-1 text-xs">
              <span>{commit.author.login}</span>
              <span className="text-white/60">{formatTimeAgo(commitDate)}</span>
            </figcaption>
          </figure>
        </div>

        <div className="flex items-start gap-2 text-sm">
          <div className="bg-gray-200 flex items-center rounded-lg">
            <div className="border-r border-white/20 hover:border hover:border-white p-2 rounded-l-lg">
              <i className="fa-regular fa-copy"></i>
            </div>
            <span className="hover:border hover:border-white p-2 rounded-r-lg">
              {commit.sha.slice(0, 7)}
            </span>
          </div>

          <div className="bg-gray-200 p-2 flex items-center rounded-lg hover:border hover:border-white h-9">
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommitItem;
