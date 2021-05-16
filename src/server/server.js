// API file
// This will host the API server that the react application will ping to query for gist information

const express = require('express');
const port = 3001;

const app = express();

app.listen(port, () => {
   console.log(`Gist Fetch Server listening on port ${port}`);
});
