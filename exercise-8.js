const mongo = require('mongodb').MongoClient

const args = process.argv.slice(2)

const URL = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(URL, (err, db) => {
  if (err) throw err
  const collection = db.collection('parrots')
  collection.count({
    age: { $gt: parseInt(args[0]) }
  }, (err, count) => {
    if (err) throw err
    console.log(count)
    db.close()
  })
})
