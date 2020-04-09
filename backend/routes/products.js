const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
  .then(products => res.json(products))
  .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:description').get((req, res) => {
  Product.find({ description: req.params.description})
  .then(products => res.json(products))
  .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:lastSold').get((req, res) => {
  Product.find({ lastSold: { $gte: req.params.lastSold}})
  .then(products => res.json(products))
  .catch(err => res.status(400).json('Error: '+ err));
});


router.route('/shelfLife/:shelfLife').get((req, res) => {
  Product.find({ shelfLife: { $gte: req.params.shelfLife}})
  .then(product => res.json(product))
  .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:department').get((req, res) => {
  Product.find({ department: req.params.department})
  .then(products => res.json(products))
  .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/price/:price').get((req, res) => {
  Product.find({ price: { $lte: req.params.price}})
  .then(product => res.json(product))
  .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/cost/:cost').get((req, res) => {
  Product.find({ cost: { $lte: req.params.cost}})
  .then(product => res.json(product))
  .catch(err => res.status(400).json('Error: '+ err));
});



router.route('/add').post((req, res) => {
  const id = req.body.id;
  const description = req.body.description;
  const lastSold = req.body.lastSold;
  var shelfLife = req.body.shelfLife;
  shelfLife = shelfLife.slice(0, shelfLife.length-1);
  shelfLife = parseInt(shelfLife);
  const department = req.body.department;
  var price = req.body.price;
  price = price.slice(1,price.length);
  price = parseFloat(price);
  const unit = req.body.unit;
  const xFor = req.body.xFor;
  var cost = req.body.cost;
  cost = cost.slice(1,cost.length);
  cost = parseFloat(cost);


const newProduct = new Product({
  id,
  description,
  lastSold,
  shelfLife,
  department,
  price,
  unit,
  xFor,
  cost,
});

newProduct.save()
.then(() => res.json('Product added!'))
.catch(err => res.status(400).json('Error: '+ err));
});



module.exports = router;
