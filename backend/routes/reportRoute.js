import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let booksSold = 0;
    let report = [];

    // Find sold books
    const soldBooks = await Book.find({ isSold: true });
    booksSold = soldBooks.length;

    // Prepare the report
    for (const book of soldBooks) {
      report.push({
        title: book.title,
        cost: book.cost,
        sellerName: book.sellerName,
        sellerEmail: book.sellerEmail,
        sellerPhone: book.sellerPhone,
        buyerName: book.buyerName,
        buyerEmail: book.buyerEmail,
        buyerPhone: book.buyerPhone,
      });
    }

    res.status(200).send({ report, booksSold });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
