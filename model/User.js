import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avatar: String,
  description: {
    type: String,
    trim: true
  },
  token: String
})

export default model('User', UserSchema)