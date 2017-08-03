const mongo = require('mongodb').MongoClient

const args = process.argv.slice(2)

const URL = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(URL, (err, db) => {
  if (err) throw err
  const collection = db.collection('docs')
  const firstName = args[0]
  const lastName = args[1]
  collection.insert({
    firstName,
    lastName
  }, (err, docs) => {
    if (err) throw err
    console.log(JSON.stringify({
      firstName,
      lastName
    }))
    db.close()
  })
})
