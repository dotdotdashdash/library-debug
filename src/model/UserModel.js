const mongoose = require('mongoose');
const { use } = require('../routes/loginroute');
mongoose.connect('mongodb://localhost:27017/Library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name : String,
    last_name: String,
    email: String,
    pwd: String
});

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;

