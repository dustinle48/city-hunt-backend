const express = require('express')
const app = express()
const cors = require('cors')
const httpServer = require('http').createServer(app)
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://admin:admin@cluster0.iwnat.mongodb.net/bookstore?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, function() {
    console.log('Database connected')
})
app.use(bodyParser.urlencoded({ extended: false }))

const treasureRouter = require('./api/treasure/route/treasureRouter')
app.use('/treasure', treasureRouter)

const mailRouter = require('./api/mail/route/mailRouter')
app.use('/mail', mailRouter)

httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`))