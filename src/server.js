// Server
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveGiveClasses } = require('./pages')

// Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
// Get data with get.body
.use(express.urlencoded({ extended: true }))
// Set up static archives (CSS, scripts, images)
.use(express.static("public"))
// application routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveGiveClasses)
.listen(5500)