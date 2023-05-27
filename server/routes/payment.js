const express = require("express");
const router = express.Router();
const payment = require("../services/payment");

// Create Payment Intent
router.post("/", async function (req, res, next) {
  try {
    res.json(await payment.createPaymentIntent(req.body));
  } catch (err) {
    console.error(`Error while creating payment intent`, err.message);
    next(err);
  }
});

// Checkout
router.post("/checkout", async function (req, res, next) {
  try {
    res.json(await payment.createCheckoutSession(req.body));
  } catch (err) {
    console.error(`Error while creating checkout session`, err.message);
    next(err);
  }
});

module.exports = router;
