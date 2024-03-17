import mongoose, { mongo } from 'mongoose';


const userSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true}
    
})

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});



const user = mongoose.model("user",userSchema)
const Product = mongoose.model('Product', ProductSchema);

export {user , Product};