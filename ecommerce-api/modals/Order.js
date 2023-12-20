const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema=new Schema({
    orderby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    products:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            },
            color:{
                type:String,
                required:true
            },
            size:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            price:{
                type:Number,
                required:true
            }
        }
    ],

    amount:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","delivered","cancelled"],
        default:"pending"
    }
    ,
    deliveryMode:{
        type:String,
        enum:["standard","express"],
        default:"standard"
    },
    paymentMode:{
        type:String,
        enum:["cod","card"],
        default:"cod"
    },
    orderedDate:{
        type:Date,
        default:Date.now
    },
    deliveredDate:{
        type:Date,
        default:Date.now+7
    }
},{
    timestamps:true

})
module.exports= mongoose.model("Order",orderSchema)