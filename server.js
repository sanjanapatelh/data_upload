var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sanjanapatel:8884098565@cluster0.poaax.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("branch").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
