// import { DataTypes} from 'sequelize'
// import { sequelize } from '../database/database.js'
// import { Category } from './Category.js';
// import { Picture } from "./Picture.js"
// import { User } from "./User.js"
// import { Color } from "./Color.js"

    // Construccion del modelo producto
// export const Product = sequelize.define('Product',{
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     description: {
//         type: DataTypes.STRING(2000),
//         allowNull: false
//     },
//     price: {
//         type: DataTypes.DECIMAL(10,2),
//         allowNull: false,
//     },
//     guarantee: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     brand: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     amount: {
//         type: DataTypes.INTEGER,
//         allowNull: true
//     },
//     material: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     weight: {
//         type: DataTypes.STRING,
//         allowNull: true
//     }
// });

// Product.hasMany(Picture); ----> Relacion uno a muchos
// Product.belongsToMany(Category, { through: 'Category_Product' });  ----> Relacion muchos a muchos 
// Product.belongsToMany(Color, { through: 'Color_Product' });
// Product.belongsToMany(User, { through: 'ShoppingCar' });
// Product.belongsToMany(User, { through: 'Favorite' });