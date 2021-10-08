import * as sequelize from 'sequelize';
import { userFactory } from '../modules/user_model';
import { profileFactory } from '../modules/profile.model';
export const dbConfig = new sequelize.Sequelize((process.env.DB_NAME = 'demo_all'), (process.env.DB_USER = 'root'), (process.env.DB_PASSWORD = 'root'), {
    port: Number(process.env.DB_PORT) || 3306,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
});
export const User = userFactory(dbConfig);
export const profile = profileFactory(dbConfig);
