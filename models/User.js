const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    validate: {
        isAsync: true,
        validator: function(value, isValid) {
            const self = this;
            return self.constructor.findOne({ username: value })
            .exec(function(err, user){
                if(err){
                    throw err;
                }
                else if(user) {
                    if(self.id === user.id) {  // if finding and saving then it's valid even for existing email
                        return isValid(true);
                    }
                    return isValid(false);  
                }
                else{
                    return isValid(true);
                }

            })
        },
        message:  'The email address is already taken!'
    },
},
  savedShows: {
    type: Array,
    ref: 'Show',
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
