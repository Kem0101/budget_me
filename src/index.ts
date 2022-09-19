// Dependencias
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// Archivos
import sequelizeConnect from './config';

const app: Application = express();
dotenv.config();
const PORT = process.env.PORT;

// Files of routes
import userRoutes from './router/User';

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api', userRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  sequelizeConnect
    .authenticate()
    .then(async () => {
      console.log('DB Connected');

      try {
        await sequelizeConnect.sync({ force: true });
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error: string) => {
      console.log(error);
    });
});

export default app;
