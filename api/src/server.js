import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: ['http://localhost:4200', 'http://127.0.0.1:4200'], // Angular default port
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json());

// Debug
app.use((req, res, next) => {
  console.log('--- Incoming Request ---');
  console.log('Method:', req.method);
  console.log('URL:', req.originalUrl);
  console.log('Origin:', req.headers.origin);
  console.log('Headers:', JSON.stringify(req.headers));
  if (req.body && Object.keys(req.body).length) console.log('Body:', JSON.stringify(req.body));
  console.log('------------------------');
  next();
});

app.use(morgan('dev'));

// Test Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working' });
});

app.post('/test', (req, res) => {
  console.log('Request Body:', req.body);
  res.status(200).json({ 
    ok: true, 
    message: 'Test route working!',
    received: req.body 
  });
});

// Auth Routes
app.use('/api/auth', authRoutes);

// Catch-all 404 handler for any unmatched route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Server failed to start:', err.message);
  }
};

startServer();