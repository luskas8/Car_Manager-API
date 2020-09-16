import { Schema } from 'mongoose';
import { findOneOrCreate, findByBrand } from '../controllers/CarController';

const CarSchema = new Schema({
    name: String,
    brand: String,
    country: Number,
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at:  {
        type: Date,
        default: new Date()
    }
});

CarSchema.static.findOneOrCreate = findOneOrCreate;
CarSchema.static.findByBrand = findByBrand;

export default CarSchema;