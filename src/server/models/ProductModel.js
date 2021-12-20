import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true, unique: true, dropDups: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  max_quantity: { type: Number, required: true },
  current_quantity: { type: Number, required: true },
});

export default model('product', productSchema);