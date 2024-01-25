#!/usr/bin/node
const url = process.argv[2];
const request = require('request');

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const data = JSON.parse(body);
  const completedTasks = data.filter(task => task.completed && task.userId);
  const completedTasksUsers = completedTasks.reduce((acc, task) => {
    acc[task.userId] = (acc[task.userId] || 0) + 1;
    return acc;
  }, {});
  console.log(completedTasksUsers);
});
