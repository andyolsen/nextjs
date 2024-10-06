// Specify the NodeJS packages we need.
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// Configure app to use bodyParser() and JSON, so we can easily get data from the HTTP body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure CORS (i.e. cross-origin requests) and allow access from React applications.
var originsWhitelist = ['http://localhost:3000'];
var corsOptions = {
    origin: function(origin, callback){
        const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

// Get an instance of the Express Router.
var router = express.Router();


//-------------------------------------------------------------------------------------
// Authentication checks.
//-------------------------------------------------------------------------------------

const ARTIFICIAL_API_KEY = "jgjhfgj754_564vbn5456456654654bgfh"

function authenticateKey(req, res, next) {

    const message = `Authenticating request to ${req.originalUrl} at ${new Date().toLocaleTimeString()}, `
    
    const api_key = req.header("Auth-Api-Key")
    console.log(`API KEY ${api_key}`)
    if (api_key && api_key === ARTIFICIAL_API_KEY) {
        console.log(`${message} OK`)
        next();
    }
    else {
        console.log(`${message} FAIL`)
        res.status(403).send({ error: { code: 403, message: "You are not allowed dude." } });
    }
}


//-------------------------------------------------------------------------------------
// Shops-related endpoint, nice and easy.
//-------------------------------------------------------------------------------------

router.get('/shops', authenticateKey, function(req, res) {
    res.status(200).json(['London', 'Paris', 'New York']);
})


//-------------------------------------------------------------------------------------
// Products-related code and endpoints, more realistic.
//-------------------------------------------------------------------------------------

var products = [
    { id: 0, description: "Swansea City shirt", category: "Leisure wear", price: 45 },
    { id: 1, description: "Cardiff City shirt", category: "Leisure wear", price: 5 },
    { id: 2, description: "Bugatti Chiron", category: "Auto", price: 2000000 },
    { id: 3, description: "65 inch UHDTV", category: "TV/Audio", price: 1800 },
    { id: 4, description: "Carving skis", category: "Sports equipment", price: 350 },
    { id: 5, description: "Ski boots", category: "Sports equipment", price: 150 }
];
var nextid = 6;

router.get('/products', authenticateKey, function(_, res) {
    res.status(200).json(products);
})

router.get('/products/:id', authenticateKey, (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            res.status(200).json(products[i]);
            return;
        }
    }
    res.status(404).send({ error: { code: 404, message: "Product not found" } });
})

router.post('/products', authenticateKey, (req, res) => {
    const product = req.body;
    product.id = nextid++;
    products.push(product);
    res.status(201)
       .header('location', `server-api/products/${product.id}`)
       .json(product);
})

router.put('/products/:id', authenticateKey, (req, res) => {
    const id = req.params.id;
    const product = req.body;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i] = product;
            res.status(200).send();
            return;
        }
    }
    res.status(404).send({ error: { code: 404, message: "Product not found" } });
})

router.delete('/products/:id', authenticateKey, (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
            res.status(204).send();
            return;
        }
    }
    res.status(404).send({ error: { code: 404, message: "Product not found" } });
})

router.get('/products-summary/count', authenticateKey, (_, res) => {
    const count = products.length;
    res.status(200).json(count);
})

router.get('/products-summary/value', authenticateKey, (_, res) => {
    const value = products.reduce((sum, product) => sum + product.price, 0)
    res.status(200).json(value);
})


//-------------------------------------------------------------------------------------
// Server start-up code.
//-------------------------------------------------------------------------------------

app.use('/server-api', router);
app.listen(8080);
console.log("Service listening at http://localhost:8080/server-api");