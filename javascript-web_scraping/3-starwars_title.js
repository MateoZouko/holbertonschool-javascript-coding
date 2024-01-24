#!/usr/bin/node
const request = require('request');
const movieID = process.argv[2];
const urlAPI = `https://swapi-api.hbtn.io/api/films/${movieID}`;

request.get(urlAPI, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const jsonRsp = JSON.parse(body);

  if (jsonRsp.title) {
    console.log(jsonRsp.title);
  }
});
