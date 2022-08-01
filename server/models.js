import { Sequelize, Datatypes, Model } from 'sequelize';
// import Pool from '../database/index.js'

var db = new Sequelize('reviews', 'user', 'password')

// var Review = db.define('Review', {
//   productID: Sequelize.STRING,
//   reviewID: Sequelize.STRING,
//   rating: Sequelize.INTEGER,
//   summary: Sequelize.STRING,
//   recommend: Sequelize.BOOLEAN,
//   response: Sequelize.STRING,
//   date: Sequelize.DATE,
//   name: Sequelize.STRING,
//   helpful: Sequelize.INTEGER,
// })

const Product = db.define(
  'Product',
  {
    productID: Sequelize.STRING
  }
);

const Review = db.define(
  'Review',
  {
    reviewID: Sequelize.INTEGER,
    rating: Sequelize.INTEGER,
    summary: Sequelize.STRING,
    recommend: Sequelize.BOOLEAN,
    response: Sequelize.STRING,
    date: Sequelize.DATE,
    name: Sequelize.STRING,
    helpful: Sequelize.INTEGER,
  }
);

const Photos = db.define(
  'Photos',
  {
    photoID: Sequelize.INTEGER,
    url: Sequelize.STRING,
  }
);


Product.hasMany(Review);
Review.belongsTo(Product);
Review.hasMany(Photos);
Photos.belongsTo(Review);

const productReview = await Product.findOne({WHERE: {productID: ${product_id}}})




