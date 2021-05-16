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
        const id = gistData['id'];
        const createdDate = gistData['created_at'];
        const description = gistData['description'] ? gistData['description'] : 'No description given';
        minimumResponseData.push({id: id, date: createdDate, description: description});
    });
    return minimumResponseData;
}

exports.fetchGistsForUsername = function (username) {
    // const options = {
    //     hostname: 'api.github.com',
    //     path: `/users/${username}/gists`,
    //     method: 'GET',
    //     headers: { 'user-agent': 'node.js' }
    // }

    // const request = https.request(options, (resp) => {
    //     let result = ''
    //     resp.on('data', function (chunk) {
    //         console.log(chunk);
    //         result += chunk;
    //     });
    //
    //     resp.on('end', function () {
    //         console.log(result);
    //     });
    //     resp.on('error', function(err) {
    //        console.log(err);
    //     });
    // });


    // return [];

    const APIResponse = fs.readFileSync('./server/response.json', {encoding: 'utf-8'});
    const parsedResponse = JSON.parse(APIResponse.toString());
    // console.log(parsedResponse);
    return formatAPIResponse(parsedResponse);
}
