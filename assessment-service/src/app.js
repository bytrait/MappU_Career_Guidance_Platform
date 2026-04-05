const dotenv =  require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const assessmentRoutes = require('./routes/assessment.routes');
const userAssessmentProgressRoutes = require('./routes/userAssessmentProgress.route');
const preferenceRoutes = require('./routes/preference.routes');
const errorHandler = require('./middlewares/error.middleware');
const corsOptions = require('./config/cors.config');

const app = express();

// ====== Middlewares ======
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Helmet: disable CSP in dev, allow images from prod domain in prod
if (process.env.NODE_ENV === 'production') {
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
} else {
  app.use(helmet({ contentSecurityPolicy: false }));
}

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// ====== Static Serving ======
app.use(
  '/static/src/assets',
  cors({
    origin: [
      'http://127.0.0.1:5174',       // local frontend
      'https://career.bytrait.com',  // deployed frontend
    ],
    credentials: false, // no cookies needed for images
  }),
  express.static(path.join(__dirname, 'assets'), {
    fallthrough: false,
    extensions: ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'],
  })
);

// ====== API Routes ======
app.use('/', assessmentRoutes);
app.use('/assessment-progress', userAssessmentProgressRoutes);
app.use('/preference', preferenceRoutes)
// ====== Error Handler ======
app.use(errorHandler);

// ====== Start Server ======
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Assessment service running on port ${PORT}`);
});

module.exports = app;
