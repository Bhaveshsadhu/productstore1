import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price must be greater than 0'],
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Product image URL is required'],
    },
},
    {
        timestamps: true, // adds createdAt and updatedAt
    });
const Product = mongoose.model('Product', productSchema);

export default Product;