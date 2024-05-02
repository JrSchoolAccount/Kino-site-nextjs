import mongoose from "mongoose";

export type TUser = {
    name: string;
    email: string;
    password: string;
};

const UserSchema = new mongoose.Schema<TUser> (
    {
        name: String,
        email: String,
        password: String
    }
);
const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;