const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: { type: Number},
  description: { type: String, required: true},
  lastSold:{ type: Date, required: true},
  shelfLife:{ type: Number, required: true},
  department:{ type: String, required: true},
  price:{ type: Schema.Types.Decimal128, required: true},
  unit:{ type: String, required: true},
  xFor:{ type: Number, required: true},
  cost:{ type: Schema.Types.Decimal128, required: true},
}, {
      timestamps: false,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
