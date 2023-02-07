import express from 'express';
import ProductRoutes from './Routes/ProductRoutes'

const app = express();

app.use(express.json());

app.use('/products', ProductRoutes);

app.get('/', (_req, res) => {res.status(200).json({ message: 'api is running' })});

export default app;