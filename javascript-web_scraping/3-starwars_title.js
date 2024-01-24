#!/usr/bin/node
const request = require('request');

const movieID = process.argv[2];
const urlAPI = `https://swapi-api.hbtn.io/api/films/${id}`;

request.get(urlAPI, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  }
  const jsonRsp = JSON.parse(body);

  if (jsonRsp.title) {
    console.log(jsonRsp.title);
  }
});
