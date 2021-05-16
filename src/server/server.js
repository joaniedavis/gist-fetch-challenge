// API file
// This will host the API server that the react application will ping to query for gist information

const express = require('express');
const url = require('url');

const gistWrapper = require('./gistWrapper')

const port = 3001;

const app = express();


app.get('/gists', (req, res) => {
    const query = url.parse(req.url, true).query;
    const username = query.username;

    const response = gistWrapper.fetchGistsForUsername(username);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send({data: response});
});

app.listen(port, () => {
    console.log(`Gist Fetch Server listening on port ${port}`);
});
