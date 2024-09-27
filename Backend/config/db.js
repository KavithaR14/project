const MongoClient = require('mongodb').MongoClient;

const url = "MONGO_URI"; // Replace with your actual MongoDB URI

MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log("Database connected!");

    const dbo = client.db("mydb"); // Specify your database

    // Create a collection
    dbo.createCollection("login", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        client.close(); // Always close the client connection
    });
});
