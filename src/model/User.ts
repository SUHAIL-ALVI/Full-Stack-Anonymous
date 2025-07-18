import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document {
       content: string;
       createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({

     content: {
        type: String,
        required: true,
     },
       createdAt: {
            type: Date,
            required: true,
            default: Date.now,  
        }
     
});


export interface User extends Document {
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verfyCodeExpires: Date,
    messages: Message[];
    isverified: boolean;
    isAcceptingMessages: boolean;
}


//updated User Schema

const UserSchema: Schema<User> = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,

    },
     email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verification code is required"], 
    },
    verfyCodeExpires: {
        type: Date,
        required: [true, "Verification code expiration is required"],
    },
    isverified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessages: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema],
})

const UserModel = 
(mongoose.models.User as mongoose.Model<User>) ||
mongoose.model<User>("User", UserSchema);
export default UserModel;