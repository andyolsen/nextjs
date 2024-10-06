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

// Our application data.
var products = [
    { id: 0, description: "Swansea City shirt", category: "Leisure wear", price: 45 },
    { id: 1, description: "Cardiff City shirt", category: "Leisure wear", price: 5 },
    { id: 2, description: "Bugatti Chiron", category: "Auto", price: 2000000 },
    { id: 3, description: "65 inch UHDTV", category: "TV/Audio", price: 1800 },
    { id: 4, description: "Carving skis", category: "Sports equipment", price: 350 },
    { id: 5, description: "Ski boots", category: "Sports equipment", price: 150 }
];
var nextid = 6;


//-------------------------------------------------------------------------------------
// Implement authentication checks.
//-------------------------------------------------------------------------------------

const ARTIFICIAL_API_KEY = "jgjhfgj754_564vbn5456456654654bgfh"

function authenticateKey(req, res, next) {

    const message = `Authenticating request to ${req.originalUrl} at ${new Date().toLocaleTimeString()}, `
    
    let api_key = req.header("Auth-Api-Key")
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
// HTTP handler methods for /products.
//-------------------------------------------------------------------------------------
router.get('/products', authenticateKey, function(req, res) {
    res.status(200).json(products);
})

router.get('/products/:id', authenticateKey, (req, res) => {
    var id = req.params.id;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            res.status(200).json(products[i]);
            return;
        }
    }
    res.status(404).send({ error: { code: 404, message: "Product not found" } });
})

router.post('/products', authenticateKey, (req, res) => {
    var product = req.body;
    product.id = nextid++;
    products.push(product);
    res.status(201)
       .header('location', `server-api/products/${product.id}`)
       .json(product);
})

router.put('/products/:id', authenticateKey, (req, res) => {
    var id = req.params.id;
    var product = req.body;

    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i] = product;
            res.status(200).send();
            return;
        }
    }
    res.status(404).send({ error: { code: 404, message: "Product not found" } });
})

router.delete('/products/:id', authenticateKey, (req, res) => {
    var id = req.params.id;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
            res.status(204).send();
            return;
        }
    }
    res.status(404).send({ error: { code: 404, message: "Product not found" } });
})


//-------------------------------------------------------------------------------------
// HTTP handler methods for /shops.
//-------------------------------------------------------------------------------------
router.get('/shops', authenticateKey, function(req, res) {
    res.status(200).json(['London', 'Paris', 'New York']);
})


//-------------------------------------------------------------------------------------
// HTTP handler methods for /timestamp*.
//-------------------------------------------------------------------------------------
var timestamp1_hitcount = 1;
var timestamp2_hitcount = 1;
var timestamp3_hitcount = 1;
var timestamp4_hitcount = 1;
var timestamp5_hitcount = 1;

router.get('/timestamp1', authenticateKey, function(req, res) {
    res.status(200).json(`timestamp1 hitcount ${timestamp1_hitcount++}, timestamp ${new Date().toLocaleTimeString()}`);
})

router.get('/timestamp2', authenticateKey, function(req, res) {
    res.status(200).json(`timestamp2 hitcount ${timestamp2_hitcount++}, timestamp ${new Date().toLocaleTimeString()}`);
})

router.get('/timestamp3', authenticateKey, function(req, res) {
    res.status(200).json(`timestamp3 hitcount ${timestamp3_hitcount++}, timestamp ${new Date().toLocaleTimeString()}`);
})

router.get('/timestamp4', authenticateKey, function(req, res) {
    res.status(200).json(`timestamp4 hitcount ${timestamp4_hitcount++}, timestamp ${new Date().toLocaleTimeString()}`);
})

router.get('/timestamp5', authenticateKey, function(req, res) {
    res.status(200).json(`timestamp5 hitcount ${timestamp5_hitcount++}, timestamp ${new Date().toLocaleTimeString()}`);
})


//-------------------------------------------------------------------------------------
// HTTP handler methods for /products-summary.
//-------------------------------------------------------------------------------------

router.get('/products-summary/count', authenticateKey, (req, res) => {
    const count = products.length;
    res.status(200).json(count);
})

router.get('/products-summary/total-value', authenticateKey, (req, res) => {
    const total_value = products.reduce((sum, product) => sum + product.price, 0)
    res.status(200).json(total_value);
})


//-------------------------------------------------------------------------------------
// Server start-up code.
//-------------------------------------------------------------------------------------

// For requests that have the /server-api prefix, use the Express Router to route the request to the appropriate HTTP handler method above.
app.use('/server-api', router);

// Start listening on port 8080.
app.listen(8080);
console.log("Service listening at http://localhost:8080/server-api");