import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import axios from "axios";
import CommitItem from "./components/commits/commitItem";

import { Commit } from "./components/commits/commit.types";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [commits, setCommits] = useState<Commit[]>([]);

  useEffect(() => {
    async function getCommits() {
      const res = await axios.get(`${API_URL}/github/commits`);
      type response = {
        commits: Commit[];
      };

      const data = res.data as response;

      setCommits(data.commits);
    }

    getCommits();
  }, []);

  console.log(commits);

  return (
    <main className="bg-gray pb-12 min-h-[100svh] w-full text-white">
      <section className="w-7/12 mx-auto pt-12">
        <h1 className="text-2xl">Commits</h1>
        <Separator className="my-4 bg-light-gray" />

        <Button className="flex items-center gap-3">
          <i className="fa-solid fa-code-branch text-white"></i>
          <span>main</span>
        </Button>

        <div className="grid gap-4">
          {commits.map((commit, i) => (
            <CommitItem
              key={commit.sha}
              commit={commit}
              previousCommit={i !== 0 ? commits[i - 1] : undefined}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
