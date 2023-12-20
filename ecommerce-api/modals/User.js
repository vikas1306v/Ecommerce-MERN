const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    firstname:{
        type:String,
        required:true,
     
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
       
    },
 
    password:{
        type:String,
        required:true
    },
    mobileNumber: {
        type: String,
        required: true,
       
      },
    isBlocked: {
        type: Boolean,
        default: false,
      },
      address: {
        type: String,
      },
      wishlist: [
        { 
            type: mongoose.Schema.Types.ObjectId,
             ref: "Product" 
        }
    ],
      cart: {
        type: Array,
        default: [],
      },
    role:{
        type:String,
        default:'user',
    },
    purchases:{
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
});
module.exports = mongoose.model('User', userSchema);