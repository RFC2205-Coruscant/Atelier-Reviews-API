// import {Sequelize, DataTypes} from 'sequelize';
// // import Pool from '../database/index.js'

// var db = new Sequelize('reviews', 'postgres', 'password1', {host: 'localhost', dialect: 'postgres'})

// // var Review = db.define('Review', {
// //   productID: Sequelize.STRING,
// //   reviewID: Sequelize.STRING,
// //   rating: Sequelize.INTEGER,
// //   summary: Sequelize.STRING,
// //   recommend: Sequelize.BOOLEAN,
// //   response: Sequelize.STRING,
// //   date: Sequelize.DATE,
// //   name: Sequelize.STRING,
// //   helpful: Sequelize.INTEGER,
// // })

// // const Product = db.define(
// //   'reviewdata',
// //   {
// //     productID: Sequelize.STRING
// //   }
// // );

// const Review = db.define(
//   'reviewdata',
//   {
//     id:{
//     type: DataTypes.UUID,
//     primaryKey: true, },
//     productID: DataTypes.INTEGER,
//     rating: DataTypes.INTEGER,
//     summary: DataTypes.STRING,
//     recommend: DataTypes.BOOLEAN,
//     response: DataTypes.STRING,
//     date: DataTypes.DATE,
//     name: DataTypes.STRING,
//     helpful: DataTypes.INTEGER,
//   }
// );

// // const Photos = db.define(
// //   'reviewphotos',
// //   {
// //     photoID: DataTypes.INTEGER,
// //     url: DataTypes.STRING,
// //   }
// // );


// // // Product.hasMany(Review);
// // // Review.belongsTo(Product);
// // Review.hasMany(Photos);
// // Photos.belongsTo(Review);

// // async function GiveProdReview() {

// // const productReview = await Review.findAll({
// //   WHERE: {productID: 641268 },
// //   INCLUDE: [{
// //       model: Photos,
// //       where: {photoID: 1}
// //   }],
// // });

// // console.log(JSON.stringify(productReview, null, 2));

// // }

// // GiveProdReview();

// Review.findAll().then(reviews => {
//   console.log("All reviews:", JSON.stringify(reviews, null, 4));
// })