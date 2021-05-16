# Joanie Davis Gist-Fetch Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Running the project
Before starting the client or the server, run `npm install` to install the local dependencies.
 
## Start Client
In the root of the project run `npm start` to start the React client. 

## Start Server
In the root of the project run `node src/server/server.js` to start the node.js server.

# Component Descriptions 
This project was created with the goal of creating an MVP for the given requirements including a functioning React webpage, a functioning Node.js server with one endpoint, and a functioning wrapper library to query the GitHub gist API.

### App
A single-page React app that takes in a GitHub username and displays the created date and description for a given gist. 

### API
A Node.js server with a `/gists` API endpoint that expects query parameters of `{username = [Username to be searched for]}`.
This calls into the GistWrapper library described in the next section. 

### Library 
A wrapper around GitHub's gist-fetching API.  Intended to query the API for the gists of a given user and return a collection of data in the format:
```
{
    date: [created_date],
    description: [gist_description or else 'No description provided' if none]
}
```

** Could not get functioning within the 2-hour time limit.  So currently reads in JSON data from local file `src/server/response.json` that is populated with the API response for user `choco-bot`.

# Future Improvements
A quick list of improvements I would implement given more time .
- Implement the GitHub API so it functions correctly.
- Refactor the React Component to render each gist description as an individual component.
- Refactor `server.js` to not use `url.parse` as that call is depreciated. 
- Add functionality in the React Component to not submit a query if the input string is empty.
