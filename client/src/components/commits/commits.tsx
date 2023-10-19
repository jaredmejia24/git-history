import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import axios from "axios";
import CommitItem from "./commitItem";

import { Commit } from "./commit.types";
import Spinner from "../ui/spinner";

const API_URL = import.meta.env.VITE_API_URL;

function Commits() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCommits() {
      try {
        setIsLoading(true);
        const res = await axios.get(`${API_URL}/github/commits`);
        type response = {
          commits: Commit[];
        };

        const data = res.data as response;

        setCommits(data.commits);
      } finally {
        setIsLoading(false);
      }
    }

    getCommits();
  }, []);

  return (
    <section className="w-7/12 mx-auto pt-12">
      <h1 className="text-2xl">Commits</h1>
      <Separator className="my-4 bg-light-gray" />

      <Button className="flex items-center gap-3">
        <i className="fa-solid fa-code-branch text-white"></i>
        <span>main</span>
      </Button>

      {isLoading ? (
        <div className="flex justify-center mt-2">
          <Spinner />
        </div>
      ) : (
        <div className="grid gap-4">
          {commits.map((commit, i) => (
            <CommitItem
              key={commit.sha}
              commit={commit}
              previousCommit={i !== 0 ? commits[i - 1] : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Commits;
