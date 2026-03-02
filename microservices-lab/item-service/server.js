const express = require('express');
const app = express();
app.use(express.json());

let items = [
    { id: 1, name: "Laptop", price: 1299.99 },
    { id: 2, name: "Mouse", price: 25.00 }
];

// 1. GET /items - Returns list of all items
app.get('/items', (req, res) => {
    res.json(items);
});

// 2. GET /items/:id - Get item by ID
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

// 3. POST /items - Create a new item 
app.post('/items', (req, res) => {
    console.log("Received data:", req.body);
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
        price: req.body.price || 0
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

const PORT = 8081;
app.listen(PORT, () => console.log(`Item Service running on port ${PORT}`));