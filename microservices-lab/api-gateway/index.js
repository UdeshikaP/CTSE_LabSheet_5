const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 8080; 

// Routing Rule for Item Service 
app.use('/items', createProxyMiddleware({ 
    target: 'http://item-service:8081', 
    changeOrigin: true
}));

// Routing Rule for Order Service
app.use('/orders', createProxyMiddleware({ 
    target: 'http://order-service:8082', 
    changeOrigin: true 
}));

// Routing Rule for Payment Service 
app.use('/payments', createProxyMiddleware({ 
    target: 'http://payment-service:8083', 
    changeOrigin: true 
}));

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});