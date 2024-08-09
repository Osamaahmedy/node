const express = require('express');
const app = express();
const { people } = require('./data');
const { products } = require('./data');

// first path
app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1><a href="/products">Products</a>');
    console.log('On Home Page');
});

// مسار المنتجات
app.get('/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
    console.log('On Products');
});
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search));
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({search:true,data:[]})
        //res.status(200).send('No products match your search.');
    }
    res.status(200).json(sortedProducts);
    console.log(req.query);
    console.log('On Query');
});
// path
app.get('/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));

    if (!singleProduct) {
        return res.status(404).send('Product does not exist');
    }

    return res.json(singleProduct);
});

// مسار المراجعات لمنتج معين
app.get('/products/:productID/reviews/:reviewID', (req, res) => {
    res.send('Hello from simple server :)');
    console.log(req.params);
});

// بدء تشغيل الخادم
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});