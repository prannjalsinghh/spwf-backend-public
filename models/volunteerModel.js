const mongoose = require('mongoose');

const volunteerSchema = {
    name:String,
    email:String,
    phone:String,
    Zip:String,
    volunteerType:[String]
}

const Volunteer = mongoose.model("Volunteer",volunteerSchema);

module.exports = Volunteer;
