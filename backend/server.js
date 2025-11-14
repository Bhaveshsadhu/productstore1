import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/product.route.js';
import { connectDB } from './config/dbConfig.js';
import path from "path";
import fs from "fs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
const isProduction = process.env.NODE_ENV === "production" || process.env.RENDER === "true";
const distPath = path.join(__dirname, "frontend", "dist");
const hasBuildOutput = fs.existsSync(distPath);

// Health check
app.get('/health', (req, res) => {
    res.send('API is running...');
});

// API routes
app.use('/api/products', productRoutes);

// Serve Vite build whenever it exists (local preview + Render prod)
if (hasBuildOutput) {
    app.use(express.static(distPath));
    app.use((req, res, next) => {
        if (req.method !== 'GET') {
            return next();
        }
        if (req.path.startsWith('/api') || req.path === '/health') {
            return next();
        }
        res.sendFile(path.join(distPath, "index.html"));
    });
} else {
    app.get('/', (_, res) => {
        res.send('Build the frontend first: run `npm run build` and restart the server.');
    });
    if (isProduction) {
        console.warn("frontend/dist is missing. Run `npm run build` before starting the server.");
    }
}

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();
