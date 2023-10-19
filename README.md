## Prerequisites

Have installed pnpm

See the [pnpm](https://pnpm.io/installation) page for installation instructions.

## Run

Steps for running the project:

1.  Clone the repo

        git clone https://github.com/jaredmejia24/git-history.git
        cd git-history

2.  Create env inside server folder:

        # Put your github token here
        GITHUB_TOKEN=

        # Port in which the server is running, defaults on 4000
        PORT=

3.  Create env inside client folder

        # API URL
        VITE_API_URL='http://localhost:4000/api/v1'

4.  Install both client and server dependencies

        cd server
        pnpm i

        cd client
        pnpm i

5.  Run both fronted and client servers

        cd server
        pnpm run start:dev

        # and in another terminal
        cd client
        pnpm run dev

        View the project on http://localhost:5173
