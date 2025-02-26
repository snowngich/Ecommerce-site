import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import productRoutes from './productRoutes.js';
import authRoutes from './authRoutes.js';
// import orderRoutes from './orderRoutes.js';
// import categoryRoutes from './categoryRoutes.js';
// import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
  });
  

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/categories', categoryRoutes);

// Error Handling Middleware
// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));
