const express = require('express');

const router = express.Router();


//Import DB
//

const data = require('../data/db.js');

router.use(express.json());

//GET posts

router.get('/', (req, res) => {
    data.find()
    .then(response => {
        res.status(200).json(response)
    }).catch(error => {
        res.status(500).json({ error: "The posts information could not be retrieved." });
    })
});


//POST posts
//

router.post('/', (req, res) => {
    const newPost = req.body;

    if (newPost.title === undefined || newPost.contents === undefined) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    } else {
        data.insert(newPost)
        .then(response => {
            res.status(201).json(response);
        }).catch(error => {
            res.status(500).json({ error: "There was an error while saving the post to the database" })
        })
    }
})


module.exports = router;
