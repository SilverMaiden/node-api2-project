const express = require('express');

const router = express.Router();




//GET posts

router.get('/posts', (req, res) => {
    res.status(200).json(res)
});


//POST posts
//

module.exports = router;
