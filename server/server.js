const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get("/", (req, res) => {
    console.log("Here")
    res.send("Hi")

})

app.listen(3000, function () {
    console.log('Endpoint hit!')
})