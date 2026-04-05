require("dotenv").config({ path: __dirname + "/../.env" });
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const assessmentRoutes = require('./routes/assessment.routes');
const careerRoutes = require('./routes/career.routes');
const authRoutes = require('./routes/auth.routes');
const billingRoutes = require('./routes/billing.routes');


const app = express();
app.set("trust proxy", 1);


const corsOrigins = ['https://career.bytrait.com', 'http://127.0.0.1:5174'];

const corsOptions = {
  origin: corsOrigins,
  credentials: true,
};

// ==== Helmet (CSP config) ====
// In dev: disable CSP completely
// In prod: keep CSP for APIs
if (process.env.NODE_ENV !== 'production') {
  app.use(helmet({ contentSecurityPolicy: false }));
} else {
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          imgSrc: ["'self'", "https://career-api.bytrait.com", "data:"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "https:", "'unsafe-inline'"],
          objectSrc: ["'none'"],
        },
      },
    })
  );
}

app.use(cors(corsOptions));

// ===== Remove CSP headers for static assets =====
app.use('/api/assessment/static', (req, res, next) => {
  // Allow images from other ports/domains
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');

  // Images don’t need cookies
  res.removeHeader('set-cookie');
  next();
});


// ==== Routes ====
app.use('/api/assessment', assessmentRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/billing', billingRoutes);
app.use(authRoutes);

// Healthcheck
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

module.exports = app;
