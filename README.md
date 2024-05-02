# Tonik's React Coding Challenge
### Preview
[https://tonik-delta.vercel.app](https://tonik-delta.vercel.app/)

Next.js and TypeScript are currently my first choice of technology stack, so I used them to complete the task.
In the time I was given I was able to do:
- basic UI - to speed up the work I used Tailwind and ready-to-use components from [Flowbite](https://flowbite.com/docs/getting-started/introduction/),
- API call to Github in the recomended in the docs way (Octokit),
- searchContext - to be able to retrieve the text entered by the user in the SearchInput component and display the Github data based on it, I used a React context,
- search based on a query in the URL.

My next steps would be:
- update handleSubmit by setting up page and per_page queries in the URL (default page=1, per_page=10),
- adding pagination by updating queries - I would use useSearchParams() and params.set() in the Table component to update the URL.
  
Finally, I would clean up the code by moving hooks and helpers to the appropriate folders.

## Application Structure
The application is structured into components, contexts, and API handlers. Components are reusable pieces of UI, contexts provide data or functionality to components, and API handlers interact with the GitHub API.

Here is a brief overview of the main components and contexts:
* SearchInput: A component that provides a search input field for the user to enter their search query.
* Table: A component that displays the search results in a table format.
* SearchContext: A context that provides the current search term and a function to update it.

The application uses the Octokit library to interact with the GitHub API. The getRepos function in search.tsx uses Octokit to fetch repositories based on the current search term.

## Run locally

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
