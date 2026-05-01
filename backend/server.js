// ============================================================
// KRIYUS – Krida Evam Yuva Samiti
// Backend Server – Node.js + Express
// ============================================================

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contact');
const volunteerRoutes = require('./routes/volunteer');
const donateRoutes = require('./routes/donate');

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ───────────────────────────────────────────────
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Request Logger (dev) ──────────────────────────────────────
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
  });
}

// ── Health Check ─────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'KRIYUS API is running 🌿',
    version: '1.0.0',
    endpoints: ['/api/contact', '/api/volunteer', '/api/donate']
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── API Routes ────────────────────────────────────────────────
app.use('/api/contact', contactRoutes);
app.use('/api/volunteer', volunteerRoutes);
app.use('/api/donate', donateRoutes);

// ── 404 Handler ───────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ── Global Error Handler ──────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({
    success: false,
    message: 'Internal server error. Please try again later.'
  });
});

// ── Start Server ──────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🌿 KRIYUS Backend running on http://localhost:${PORT}`);
  console.log(`📊 Google Sheets URL: ${process.env.GOOGLE_APPS_SCRIPT_URL ? '✅ Set' : '⚠️  Not set – check .env'}\n`);
});
