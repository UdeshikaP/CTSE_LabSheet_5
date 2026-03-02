const express = require('express');
const app = express();
app.use(express.json());

let orders = [
    { id: 1, item: "Laptop", quantity: 1, customerId: "C001" }
];

// GET /orders - Returns all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

// GET /orders/:id - Get order by ID
app.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
});

// POST /orders - Place a new order
app.post('/orders', (req, res) => {
    const newOrder = {
        id: orders.length + 1,
        item: req.body.item,
        quantity: req.body.quantity,
        customerId: req.body.customerId
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

app.listen(8082, () => console.log('Order Service running on port 8082'));