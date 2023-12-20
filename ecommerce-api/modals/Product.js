const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    images: [
      {
        url: String,
      },
    ],
    color: [
      {
        type: String,
        required: true,
        enum: [
          "Black",
          "Brown",
          "Silver",
          "White",
          "Blue",
          "Red",
          "Green",
          "Yellow",
          "Gold",
          "Purple",
          "Orange",
          "Pink",
          "Grey",
          "Multi-Color",
          "Beige",
          "Cream",
        ],
        default: "Black",
      },
    ],

    ratings: [
      {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
   averageRating: {
      type: Number,
      default: 0,
   },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);
module.exports= mongoose.model("Product", productSchema);
