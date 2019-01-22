const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vampireschema = new Schema({
    name: {type: String, required: true},
    hair_color: {type:String, default: "blonde"},
    eye_color: String,
    dob: Date,
    loves: [{type: String}],
    location: String,
    gender: String,
    victims: {type: Number, min: 1},

})

var Vampires = mongoose.model("Vampires", Vampireschema);

module.exports = Vampires;