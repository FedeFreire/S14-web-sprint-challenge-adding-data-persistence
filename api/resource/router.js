const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  helpers
    .getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  helpers
    .addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
      return resource;
    })
    .catch(next);
});

module.exports = router;
