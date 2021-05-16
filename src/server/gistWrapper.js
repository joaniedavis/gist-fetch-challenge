// Library file
// This will provide the "library" functionality required for querying the public gist API
const https = require('https');

function fetchAllGistsURL(username) {
    return `https://api.github.com/users/${username}/gists`;
}

exports.fetchGistsForUsername = function(username) {
    const options = {
        url: fetchAllGistsURL(username),
        method: 'GET',
        headers: { 'user-agent': 'node.js' }
    }

    const request = https.request(options, (resp) => {
        console.log(resp);
    });

    // request(options, { json:true }, (err, res, body) => {
    //     if(err) {
    //         console.log(`ERROR: ${err}`);
    //         console.log(body.explanation);
    //     } else {
    //         console.log(res);
    //         console.log(body);
    //     }
    // });
}
