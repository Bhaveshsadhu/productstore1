import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/product.route.js';
import { connectDB } from './config/dbConfig.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;





app.listen(PORT, async () => {
    try {
        const conn = await connectDB();
        if (conn) {
            console.log(`Server is running on http://localhost:${PORT}`);
        }
        else {
            console.error("Failed to start server due to database connection issue");
            process.exit(1);
        }
    } catch (error) {
        console.log("error While starting server:", error.message);
        process.exit(1);
    }
});

//Health Check Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);
//Routes

