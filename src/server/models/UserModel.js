import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  wallet: { type: Number, default: 20 },
  isAdmin: { type: Boolean, default: false },
});

export default model('user', userSchema);
