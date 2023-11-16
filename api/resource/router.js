const express = require('express');
const helpers = require('./model');


const router = express.Router();

router.get('/', (req, res, next) => {
    helpers.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(next);
}
);

module.exports = router;
