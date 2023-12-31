// implement your posts router here
const express = require('express');
const Post = require('./posts-model');

const router = express.Router();

router.get('/', (req, res) => {
    Post.find()
        .then(found => {
            res.json(found)
        })
        .catch(err => {
            res.status(500).json({
                message: "The posts information could not be retrieved",
                err: err.message,
                stack: err.stack
            })
        })
})

router.get('/', (req, res) => {

})

router.post('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

router.put('/', (req, res) => {

})

router.get('/', (req, res) => {

})



module.exports = router;