const express = require('express');
const helpers = require('./model');


const router = express.Router();

router.get('/', (req, res, next) => {
    helpers.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(next);
}
);

module.exports = router;
