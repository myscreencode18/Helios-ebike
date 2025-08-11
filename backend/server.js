const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Basic route
app.get('/', (req, res) => res.send('Helios API running'));

// Mount routes (we will add these files next)
const preorderRoutes = require('./routes/preorderRoutes');
app.use('/api/preorders', preorderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
