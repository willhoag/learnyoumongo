const mongo = require('mongodb').MongoClient

const args = process.argv.slice(2)

const URL = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(URL, (err, db) => {
  if (err) throw err
  const collection = db.collection('prices')
  collection.aggregate([{
    $match: { size: args[0] }
  }, {
    $group: {
      _id: 'average',
      average: {
        $avg: '$price'
      }
    }
  }]).toArray((err, results) => {
    if (err) throw err
    console.log(Number(results[0].average).toFixed(2))
    db.close()
  })
})
