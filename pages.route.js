import express from 'express'
import path from 'path'

const router = express.Router;

router.router("/", (req, res) => {
    res.sendFile(path.resolve() + '/index.html');
})

router.route("/page2", (req, res) => {
    res.sendFile(path.resolve() + '/page2.html');
})

export default router;