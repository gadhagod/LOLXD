#!/usr/bin/env node

const request = require('request')
request('https://official-joke-api.appspot.com/random_joke', function (error, response, body){
  json = JSON.parse(body);
  console.log(json.setup)
  setTimeout(() => {console.log(json.punchline);}, 3000);
})
