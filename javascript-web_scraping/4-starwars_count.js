#!/usr/bin/node
const request = require('request');
const urlAPI = process.argv[2];

request.get(urlAPI, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const responseData = JSON.parse(body).results;
    const filteredResults = responseData.reduce((acc, movie) => {
      for (const character of movie.characters) {
        if (character.includes('18')) {
          acc++;
          break;
        }
      }
      return acc;
    }, 0);
    console.log(filteredResults);
  }
});
