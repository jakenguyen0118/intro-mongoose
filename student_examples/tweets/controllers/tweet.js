// IMPORT THE DB CONNECTION
const mongoose = require('../db/connection')

// IMPORT THE TWEET MODEL
const Tweet = require('../models/tweet')

// CREATE THE DB CONNECTION IN ORDER TO CLOSE THE CONNECTION
const db = mongoose.connection

// FIND ALL - INDEX ROUTE
const index = () => {
	Tweet.find((error, tweets) => {
		console.log('tweets', tweets)
		// CLOSE THE CONNECTION
		db.close()
	})
}

// index()

// FIND ALL - RETURN A SUBSET OF KEYS
const indexSubset = () => {
	Tweet.find({}, 'title body', (err, tweets) => {
		console.log('tweets', tweets)
		db.close()
	})
}

// indexSubset()

// FIND ONE - SHOW ROUTE
const show = () => {
	Tweet.find({ title: 'Water' }, (err, tweet) => {
		console.log('tweets - find one', tweet)
		db.close()
	})
}

// show()

const likes20 = () => {
	Tweet.find({ likes: { $gte: 20 } }, (err, tweets) => {
		console.log(tweets)
		db.close()
	})
}

// likes20()

const likes20AndAlex = () => {
	Tweet.find({ likes: { $gte: 20 }, author: /alex/i }, (err, tweets) => {
		console.log(tweets)
		db.close()
	})
}

// likes20AndAlex()

// DELETE ONE BASED ON TITLE
const deleteOne = () => {
	Tweet.deleteOne({ title: 'Deep Thoughts' })
		.then((deleted) => console.log('deleted', deleted))
		.catch((err) => console.log(err))
		.finally(() => {
			db.close()
		})
}

// deleteOne()

// DELETE ONE BASED ON ID
const deleteOneById = () => {
	Tweet.findByIdAndDelete({ _id: '5f88847ff1d1c162f7641d5b' })
		.then((deleted) => console.log('deleted', deleted))
		.catch((err) => console.log(err))
		.finally(() => {
			db.close()
		})
}

deleteOneById()