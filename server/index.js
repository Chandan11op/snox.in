import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import productRoutes from './routes/product.js';

/* CONFIGURATION */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/product", productRoutes);

/* MONGOOSE SETUP */

const PORT = process.env.PORT || 9000;

// TEMPORARY MOCK FOR UI REDESIGN
// Restore MongoDB implementation later.
/*
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(PORT, () => console.log(`ServerPort: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));
*/
// Start server directly without DB
app.listen(PORT, () => console.log(`ServerPort: ${PORT} (MOCKED DB)`));