import * as fs from 'fs-extra';
import path from 'path';
import { Sequelize } from 'sequelize';
import config from '../config/db-config';

const basename = path.basename(module.filename);
const db = {};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect
});

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