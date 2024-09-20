const MongoClient = require('mongodb').MongoClient;

const url = "MONGO_URI"; // Correct URL format

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");

    const dbo = db.db("mydb");

    // Create a collection
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
