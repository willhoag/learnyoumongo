const mongo = require('mongodb').MongoClient

const args = process.argv.slice(2)

const URL = 'mongodb://localhost:27017/' + args[0]
mongo.connect(URL, (err, db) => {
  if (err) throw err
  const collection = db.collection('users')
  collection.update({
    username: 'tinatime'
  }, {
    $set: { age: 40 }
  }, (err, docs) => {
    if (err) throw err
    db.close()
  })
})
