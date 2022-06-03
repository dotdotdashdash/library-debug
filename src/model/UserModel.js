const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Library', {
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

