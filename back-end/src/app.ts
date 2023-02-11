import express from 'express';
import ProductRoutes from './Routes/ProductRoutes'

const app = express();

app.use(express.json());

app.use((_request, response, next) => {
  response.header("Access-Control-Allow-Origin", "http://localhost:3000");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use('/products', ProductRoutes);

app.get('/', (_req, res) => {res.status(200).json({ message: 'api is running' })});

export default app;