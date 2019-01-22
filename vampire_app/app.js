// 1. Require your node modules
var mongoose = require("mongoose");

// 2. Require your model (and possibly your extra data source);
var Vampire = require("./models/vampire.js");

const vampireList = require("./populateVampires")

// 3. Connect your database and collection name
const connectionString = "mongodb://localhost/vampire";
mongoose.connect(connectionString);

mongoose.connection.on("connected", () => {
    console.log("Mongoose connected")
});

mongoose.connection.on("error", (err) => {
    console.log(`error ${err}`)
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected")
});

// 4. Open your mongoose connection

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(vampireList, (err, data) => {
    console.log("vampire list added");
    mongoose.connection.close();
});


// ### Add some new vampire data

Vampire.create({
    name: "Ravana",
    eye_color: "black",
    dob: new Date(-1200, 08, 17),
    loves: ["kidnapping", "gold", "medidation"],
    victims: 10000,
}, (err, vampire) => {
    if(err){
        console.log(err);    
    }else {
        console.log(vampire);
    }
});

Vampire.create({
    name: "Lamia",
    eye_color: "purple",
    dob: new Date(1450, 03, 21),
    loves: ["kicking ass", "hurting others", "playing xbox"],
    victims: 1220,
    location: "Denver",
}, (err, vampire) => {
    if(err){
        console.log(err);    
    }else {
        console.log(vampire);
    }
});



/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

Vampire.find({gender: "f"}, (err, matchFound) => {
    if(err){
        console.log(err);
    }else{
        console.log(matchFound);
        mongoose.connection.close();
    }
})

Vampire.find({victims: {$gt: 1000}}, (err, matchFound) => {
    if(err){
        console.log(err);
    }else{
        console.log(matchFound);
        mongoose.connection.close();
    }
});


Vampire.find({victims: {$lt: 250}}, (err, matchFound) => {
    if(err){
        console.log(err)
    }else{
        console.log(matchFound);
        mongoose.connection.close();
    }
});

Vampire.find({eye_color: "blue"}, (err, matchFound) => {
    if(err){
        console.log(err)
    }else{
        console.log(matchFound);
        mongoose.connection.close();
    }
});

Vampire.find({loves: "blood"}, (err, matchFound) => {
    if(err){
        console.log(err)
    }else{
        console.log(matchFound);
        mongoose.connection.close();
    }
});

Vampire.find({victims: {$in: [120, 500, 1000]}}, (err, matchFound) => {
    if(err){
        console.log(err)
    }else{
        console.log(matchFound);
        mongoose.connection.close();
    }
})

/////////////////////////////////////////////////
// ### Select by exists or does not exist

Vampire.find({victims: {$exists: false} }, (err,found)=>{
    if(err){
        console.log(err);
            }else{
            console.log(found);
            mongoose.connection.close();
        }
    });


    Vampire.find(
            {victims: {$exists: true, $gt: 1000} }, (err,found)=>{
                if(err){
                    console.log(err);
                }
                console.log(found);
                mongoose.connection.close();
            }
        )
/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////


