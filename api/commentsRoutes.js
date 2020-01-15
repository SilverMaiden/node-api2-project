const express = require('express');

const router = express.Router();

//Import DB
//

const data = require('../data/db.js');

router.use(express.json());

//GET comments for single post

router.get('/:id/comments', (req, res) => {
    data.findPostComments(req.params.id)
    .then(response => {
        if (response !== undefined) {
            res.status(200).json(response);
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    }).catch(error => {
        res.status(500).json({ error: "The comments information could not be retrieved." })
    })
})

//POST comment for single post

router.post('/:id/comments', (req, res) => {
    const toPost = req.body;

    if (toPost.text === undefined || toPost.text.length === 0) {
        res.status(400).json({ errorMessage: "Please provide text for the comment." })
    } else {
        data.insertComment(toPost)
        .then(response => {
            if (response !== undefined) {
                res.status(201).json(response)
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." });
            }
        }).catch(error => {
            res.status(500).json({ error: req.params })
        })
    }
})

module.exports = router;
