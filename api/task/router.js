const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  helpers
    .getTasksWithProjectDetails()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  helpers
    .addTask(req.body)
    .then((task) => {
      res.status(201).json(task);
      return task;
    })
    .catch(next);
});
module.exports = router;
