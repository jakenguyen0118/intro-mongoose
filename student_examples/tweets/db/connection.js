// IMPORT MONGOOSE
const mongoose = require('mongoose')

// CONNECTION URI
const mongoURI = 'mongodb://localhost:27017/tweets'

// CONFIG PARAMS
const config = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
}
// CONNECT TO THE DATABASE/URI
mongoose.connect(mongoURI, config)

// CREATE A CONNECTION
const db = mongoose.connection

// ADDITIONAL MESSAGE CONNECTIONS
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// CLOSE THE CONNECTION
// db.close()

// EXPORT MONGOOSE
module.exports = mongoose
