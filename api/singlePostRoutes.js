const express = require('express');

const router = express.Router();


//Import DB
//

const data = require('../data/db.js');

router.use(express.json());

//GET single post

router.get('/:id', (req, res) => {
    data.findById(req.params.id)
    .then(response => {
        if (response !== undefined) {
            res.status(200).json(response)
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    }).catch(error => {
        res.status(500).json({ error: "The post information could not be retrieved." });
    })
});


//PUT single post
//

router.put('/:id', (req, res) => {
    const newPost = req.body;

    if (newPost.title === undefined || newPost.contents === undefined) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    } else {
        data.update(newPost)
        .then(response => {
            if (response !== undefined) {
                res.status(200).json(response);
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            }
        }).catch(error => {
            res.status(500).json({ error: "The post information could not be modified." })
        })
    }
})


module.exports = router;
