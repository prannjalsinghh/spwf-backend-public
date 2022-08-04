const { default: mongoose } = require("mongoose")

const ContactSchema = {
    name:String,
    email:String,
    phone:String,
    subject:String,
    message: String
}

const contact = mongoose.model("contactUs",ContactSchema)

module.exports = contact;