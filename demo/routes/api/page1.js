import express from 'express';

const route = express.Router()

route.get('/', (req, res) => {
    res.send("Welcom to page1")
})

export default route