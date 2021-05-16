// Library file
// This will provide the "library" functionality required for querying the public gist API
// const https = require('https');
const fs = require('fs');

function fetchAllGistsURL(username) {
    return `https://api.github.com/users/${username}/gists`;
}

function formatAPIResponse(jsonResponse) {
    // Need description and date
    let minimumResponseData = [];

    jsonResponse.forEach((gistData) => {
        const createdDate = gistData['created_at'];
        const description = gistData['description'] ? gistData['description'] : 'No description given';
        minimumResponseData.push({date: createdDate, description: description});
    });
    return minimumResponseData;
}

exports.fetchGistsForUsername = function (username) {
    // const options = {
    //     url: fetchAllGistsURL(username),
    //     method: 'GET',
    //     headers: { 'user-agent': 'node.js' }
    // }
    //
    // const request = https.request(options, (resp) => {
    //     console.log(resp);
    // });

    // request(options, { json:true }, (err, res, body) => {
    //     if(err) {
    //         console.log(`ERROR: ${err}`);
    //         console.log(body.explanation);
    //     } else {
    //         console.log(res);
    //         console.log(body);
    //     }
    // });

    const APIResponse = fs.readFileSync('./response.json', {encoding: 'utf-8'});
    const parsedResponse = JSON.parse(APIResponse.toString());
    // console.log(parsedResponse);
    return formatAPIResponse(parsedResponse);
}
