const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name : String,
    last_name: String,
    email: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
    },
    pwd: String
});


const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;

