import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      required: true,
      default: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    isSold: {
      type: Boolean,
      default: false,
    },
    cost: {
      type: Number,
      required: true,
    },
    sellerName: {
      type: String,
      default: "Anonymous",
    },
    sellerEmail: {
      type: String,
      default: "Anonymous",
    },
    sellerPhone: {
      type: Number,
      default: 9988191289,
    },
    buyerName: {
      type: String,
      default: "Anonymous",
    },
    buyerEmail: {
      type: String,
      default: "Anonymous",
    },
    buyerPhone: {
      type: Number,
      default: 9988191289,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);
