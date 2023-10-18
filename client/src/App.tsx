import "./App.css";

import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    async function getCommits() {
      const res = await axios.get(`${API_URL}/github/commits`);

      setCommits(res.data.commits);
    }

    getCommits();
  }, []);

  console.log(commits);
  return (
    <main className="bg-gray h-[100svh] w-full text-white">
      <div className="w-7/12 mx-auto pt-12">
        <h1 className="text-2xl">Commits</h1>
        <Separator className="my-4 bg-light-gray" />

        <Popover>
          <PopoverTrigger>
            <Button className="bg-light-gray border border-light-gray hover:bg-light-gray active:opacity-80 hover:border-white ">
              main
            </Button>
          </PopoverTrigger>

          <PopoverContent className="p-0 mt-1 shadow-lg bg-light-gray border border-light-gray">
            <h5 className="py-2 pl-4 text-white">Switch branches/tags</h5>
          </PopoverContent>
        </Popover>
      </div>
    </main>
  );
}

export default App;
