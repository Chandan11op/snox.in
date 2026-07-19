import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        desc: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["triclover valve", "triclover fittings", "stainless steels", "stainless steel dairy fittings", "fittings"]
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;