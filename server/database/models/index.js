import * as fs from 'fs-extra';
import path from 'path';
import { Sequelize } from 'sequelize';
import config from '../config/db-config';

const basename = path.basename(module.filename);
const db = {};

/*
 * @params Database
 * @params User
 * @params Password
 * @params Host
 * @params Dialect
 * Made a Connection with DB
 */
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect
});

/*
 * Making connection of all to gether
 * Models & Table Names
 */
fs
.readdirSync(__dirname)
.filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
.forEach((file) => {
  const model = require(path.join(__dirname, file))( sequelize, Sequelize.DataTypes);  
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

/*
 * Authenticate the DB Connection
 * Assign the Sequelizer Observer
 */

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

db.sequelize = sequelize;

export default db;