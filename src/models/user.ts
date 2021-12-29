import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  email: String
  userName: String
  profilePic: string
  password: String
  mobileNumber: String
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  userName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    unique: true,
    minlength: [10, 'Must be at least 10 numbers for mobile number']
  }
})

export default mongoose.model<IUser>('User', UserSchema)
