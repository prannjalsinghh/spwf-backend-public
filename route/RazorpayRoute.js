const express =require('express');
const router =express.Router();
const mongoose = require('mongoose');
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
dotenv.config();

const Order = require('../models/OrderSchema')

router.route("/get-api-key").get((req, res) => {
    res.send({ key: process.env.RAZORPAY_KEY_ID });
  });

router.route("/create-order").post( async (req, res) => {
try {
    const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
    amount: req.body.amount,
    currency: 'INR',
    };
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send('Some error occured');
    res.send(order);
} catch (error) {
    res.status(500).send(error);
}
});

router.route('/pay-order').post( async (req, res) => {
    try {
      const { name, amount, razorpayPaymentId, razorpayOrderId, razorpaySignature,panNumber, address } =
        req.body;
      const newOrder = Order({
        isPaid: true,
        amount: amount,
        name:name,
        panNumber:panNumber,
        address:address,
        razorpay: {
          orderId: razorpayOrderId,
          paymentId: razorpayPaymentId,
          signature: razorpaySignature,
        },
      });

      await newOrder.save();
      res.send({
        msg: 'Payment was successfull',
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  router.route('/list-orders').get( async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  });

  module.exports = router;