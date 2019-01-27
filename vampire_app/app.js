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
// Vampire.collection.insertMany(vampireList, (err, data) => {
//     console.log("vampire list added");
//     mongoose.connection.close();
// });


// ### Add some new vampire data

// Vampire.create({
//     name: "Ravana",
//     eye_color: "black",
//     dob: new Date(-1200, 08, 17),
//     loves: ["kidnapping", "gold", "medidation"],
//     victims: 10000,
// }, (err, vampire) => {
//     if(err){
//         console.log(err);    
//     }else {
//         console.log(vampire);
//     }
// });

// Vampire.create({
//     name: "Lamia",
//     eye_color: "purple",
//     dob: new Date(1450, 03, 21),
//     loves: ["kicking ass", "hurting others", "playing xbox"],
//     victims: 1220,
//     location: "Denver",
// }, (err, vampire) => {
//     if(err){
//         console.log(err);    
//     }else {
//         console.log(vampire);
//     }
// });



/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Vampire.find({gender: "f"}, (err, matchFound) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(matchFound);
//         mongoose.connection.close();
//     }
// })

// Vampire.find({victims: {$gt: 1000}}, (err, matchFound) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(matchFound);
//         mongoose.connection.close();
//     }
// });


// Vampire.find({victims: {$lt: 250}}, (err, matchFound) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(matchFound);
//         mongoose.connection.close();
//     }
// });

// Vampire.find({eye_color: "blue"}, (err, matchFound) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(matchFound);
//         mongoose.connection.close();
//     }
// });

// Vampire.find({loves: "blood"}, (err, matchFound) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(matchFound);
//         mongoose.connection.close();
//     }
// });

// Vampire.find({victims: {$in: [120, 500, 1000]}}, (err, matchFound) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(matchFound);
//         mongoose.connection.close();
//     }
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find({victims: {$exists: false} }, (err,found)=>{
//     if(err){
//         console.log(err);
//             }else{
//             console.log(found);
//             mongoose.connection.close();
//         }
//     });


//     Vampire.find(
//             {victims: {$exists: true, $gt: 1000} }, (err,found)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 console.log(found);
//                 mongoose.connection.close();
//             }
//         )
/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find({$or: [{location: 'Auvergne, France'},{location: "New Orleans, Louisiana, US"}]}, (err, vampire)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(`Or locations`, vampire);
//     }
// });

// Vampire.find({$or: [{loves: 'brooding'},{loves: "being tragic"}]}, (err, vampire)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(`Or loves`, vampire);
//     }
// });

// Vampire.find({$or: [{victims: {$gt: 1000}},{loves: "marshmallows"}]}, (err, vampire)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(`1000 victims or loves marshmallows`, vampire);
//     }
// });

// Vampire.find({$or: [{hair_color: 'red'},{eye_color: "green"}]}, (err, vampire)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(`red hair or green eyes`, vampire);
//     }
// });

/////////////////////////////////////////////////
//### Select objects that match one of several values


// Vampire.find({$or: [{"loves":"frilly shirtsleeves"}, {"loves": "frilly collars"}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("==========SON===========");
//         console.log(data);
//     }
// })
// Vampire.find({"loves":"brooding"}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
// Vampire.find({$or: [{"loves":"appearing innocent"}, {"loves": 'trickery'},{"loves": "lurking in rotting mansions"},{"loves":"R&B music"}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
// Vampire.find({$and: [{"loves":"fancy cloaks"}, {$nin: [{"loves": 'top hats'},{"loves": "virgin blood"}]}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

/////////////////////////////////////////////////
//### Negative Selection

// Vampire.find(
//     { loves: "ribbons",
//     eye_color: {$ne:"brown"} },
//     (err, vampires) => {
//         console.log("LOVE RIBBON", vampires); 
// 	}
// );

// Vampire.find(
//     { location: { $ne:"Rome"},
//     eye_color: {$ne:"brown"} },
//     (err, vampires) => {
//         console.log("NOT ROME", vampires); 
// 	}
// );

// Vampire.find(
//     { $or: { $ne: [{loves:"fancy cloaks"},
//     {loves:"frilly shirtsleeves"},
//     {loves:"appearing innocent"},
//     {loves:"brooding"},
//     {loves:"being tragic"},
//     ]}},
//     (err, vampires) => {
//         console.log("DOESNT LOVE", vampires); 
// 	}
// );
 
// Vampire.find(
//     { victims: {$lte:200} },
//     (err, vampires) => {
//         console.log("KILLED <= 200", vampires); 
// 	}
// );

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE


// Vampire.update(
//     { name: "Claudia" },
//     { $set: { name:"Eve" , portrayed_by: "Tilda Swinton" } },
//     (err, vampires) => {
//         console.log("RENAME EVE", vampires); 
// 	}
// );

// Vampire.findOneAndUpdate(
//     { gender: "m" },
//     { $set: { name:"Guy Man" , is_actually: "were-lizard" } },
//     (err, vampires) => {
//         console.log("MAKE FIRST MALE WERE-LIZARD", vampires); 
// 	}
// );


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

// Vampire.findOne(
//     { hair_color: "brown" },
//     (err, vampires) => {
//         post.remove(function(error){
//         });
//         console.log("REMOVE ONE BROWN HAIRED", vampires); 
// 	}
// );

// Vampire.remove(
//     { eye_color: "blue" },
//     (err, vampires) => {
//         console.log("REMOVED ALL BLUE EYES", vampires); 
// 	}
// );

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////


