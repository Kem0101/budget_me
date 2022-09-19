import { Sequelize } from 'sequelize';

// const dbName = process.env.DB_NAME as string;
// const dbUser = process.env.DB_NAME as string;
// const dbHost = process.env.DB_HOST as string;
// const dbDriver = process.env.DB_DRIVER as Dialect;
// const dbPassword = process.env.DB_PASSWORD as string;

const sequelizeConnect = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'budget',
  username: 'root',
  password: 'Dioswithme',
  logging: false,
});

export default sequelizeConnect;
