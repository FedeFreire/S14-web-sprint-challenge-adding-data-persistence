const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  helpers
    .getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  helpers
    .addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
      return project;
    })
    .catch(next);
});

module.exports = router;
