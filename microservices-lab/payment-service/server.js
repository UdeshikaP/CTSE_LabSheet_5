const express = require('express');
const app = express();
app.use(express.json());

let payments = [
    { id: 1, orderId: 1, amount: 1299.99, method: "CARD", status: "COMPLETED" }
];

// GET /payments - Returns all payments
app.get('/payments', (req, res) => {
    res.json(payments);
});

// GET /payments/:id - Get payment status by ID
app.get('/payments/:id', (req, res) => {
    const payment = payments.find(p => p.id === parseInt(req.params.id));
    if (!payment) return res.status(404).send('Payment record not found');
    res.json(payment);
});

// POST /payments/process - Process a payment
app.post('/payments/process', (req, res) => {
    const newPayment = {
        id: payments.length + 1,
        orderId: req.body.orderId,
        amount: req.body.amount,
        method: req.body.method,
        status: "SUCCESSFUL" 
    };
    payments.push(newPayment);
    res.status(201).json(newPayment);
});

app.listen(8083, () => console.log('Payment Service running on port 8083'));