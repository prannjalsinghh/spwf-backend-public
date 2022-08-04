const mongoose= require('mongoose')

const userSchema= {
    username:String,
    password:String
}

const user = mongoose.model("userdetails",userSchema);

module.exports = user;
