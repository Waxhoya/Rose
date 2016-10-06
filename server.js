
// include express proxy for API requests
var express = require('express');
var requestProxy = require('express-request-proxy');
var port = process.env.PORT || 3000;
var app = express();

function getGit(request, response) {(
  requestProxy({
    url: 'https://api.github.com/' + reqest.params[0],
    headers: {
      Authorization: 'token ' + process.env.GIT_TOKEN
    }
  })(request, response)
);};

app.get('/github/*', getGit);
