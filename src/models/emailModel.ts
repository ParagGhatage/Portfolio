import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name: 
   {type:String,
    required:[true,"please provide a Name"],
    },

    email: 
   {type:String,
    required:[true,"please provide an Email"],
    },

    message:
   {type:String,
    required:[true,"please provide an Message"],
    },

})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;