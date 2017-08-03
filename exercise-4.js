const mongo = require('mongodb').MongoClient

const args = process.argv.slice(2)

const URL = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(URL, (err, db) => {
  if (err) throw err
  const collection = db.collection('parrots')
  collection.find({
    age: { $gt: parseInt(args[0]) }
  }, {
    name: 1,
    age: 1,
    _id: 0
  }).toArray((err, docs) => {
    if (err) throw err
    console.log(docs)
    db.close()
  })
})
