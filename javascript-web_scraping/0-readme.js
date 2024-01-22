#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } else {
  console.log(data);
  }
});
