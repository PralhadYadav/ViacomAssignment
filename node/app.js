const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dataRoute = require('./routes/data')
const config = require('./config/config.json')

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/data', dataRoute)

app.listen(config.PORT, () => {
    console.log(`Node Running on : ${config.PORT}`)
})
