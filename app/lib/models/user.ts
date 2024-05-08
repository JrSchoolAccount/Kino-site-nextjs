import mongoose from 'mongoose';

export type User = {
  name: string;
  email: string;
  password: string;
};

const UserSchema = new mongoose.Schema<User>({
  name: String,
  email: String,
  password: String,
});
const UserModel = mongoose.models.Users || mongoose.model('Users', UserSchema);
export default UserModel;
