require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const { createProxyMiddleware } = require("http-proxy-middleware");

const billingRoutes = require("./billing-service/src/routes");
const assessmentRoutes = require("./assessment-service/src/routes");
const {
  startStudentPaymentReceiptJob,
} = require('./billing-service/src/jobs/studentPaymentReceipt.job');

const app = express();
app.set("trust proxy", 1);

/* =======================================================
   CORS CONFIG (MUST BE FIRST)
======================================================= */
const corsOrigins = [
  "https://career-psychometric-assessment.mappmyuniversity.com",
  "https://career-psychometric-assessment-test.mappmyuniversity.com",

  "https://career-api.mappmyuniversity.com",
  "https://career-api-test.mappmyuniversity.com",

  "http://127.0.0.1:5174",
  "http://127.0.0.1:3000"
];

app.use(
  cors({
    origin: corsOrigins,
    credentials: true,
  })
);
/* =======================================================
   CAREER SERVICE PROXY (CLEAN VERSION)
======================================================= */
app.use(
  "/api/v1/careers",
  createProxyMiddleware({
    target: process.env.CAREER_SERVICE_URL || "http://127.0.0.1:9000",
    changeOrigin: true,
    pathRewrite: {
      "^/api/v1/careers": "",   // strip prefix only
    },
    onProxyReq: (proxyReq, req) => {
      console.log("🔥 Career Forwarded:", proxyReq.path);
    },
    onError: (err, req, res) => {
      console.error("❌ Career proxy error:", err.message);
      res.status(502).json({
        success: false,
        message: "Career service unavailable",
      });
    },
  })
);


/* =======================================================
   HELMET
======================================================= */
if (process.env.NODE_ENV !== "production") {
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

app.use(cookieParser());
/* =======================================================
   RAW BODY FOR RAZORPAY WEBHOOK (MUST COME BEFORE JSON PARSER)
======================================================= */

// app.use(
//   "/api/v1/billing/payments/webhook",
//   express.raw({ type: "application/json" })
// );

/* =======================================================
   JSON PARSER
======================================================= */
app.use(express.json());
/* =======================================================
   RATE LIMIT
======================================================= */
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
  })
);

/* =======================================================
   STATIC HEADER FIX (ASSESSMENT)
======================================================= */
app.use("/api/v1/assessment/static", (req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
  res.removeHeader("set-cookie");
  next();
});


/* =======================================================
   AI SERVICE PROXY
======================================================= */
app.use(
  "/api/v1/ai",
  createProxyMiddleware({
    target: process.env.AI_SERVICE_URL || "http://localhost:8000",
    changeOrigin: true,
    pathRewrite: {
      "^/api/v1/ai": "",
    },
    onError: (err, req, res) => {
      console.error("❌ AI proxy error:", err.message);
      res.status(502).json({
        success: false,
        message: "AI service unavailable",
      });
    },
  })
);

/* =======================================================
   AUTH SERVICE PROXY
======================================================= */
app.use(
  "/api/v2/auth",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL || "http://127.0.0.1:3000",
    changeOrigin: true,
    onError: (err, req, res) => {
      console.error("❌ Auth proxy error:", err.message);
      res.status(502).json({
        success: false,
        message: "Auth service unavailable",
      });
    },
  })
);

/* =======================================================
   LOCAL MODULES (MERGED SERVICES)
======================================================= */
app.use("/api/v1/billing", billingRoutes);
app.use("/api/v1/assessment", assessmentRoutes);

/* =======================================================
   HEALTH CHECK
======================================================= */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

/* =======================================================
   GLOBAL ERROR HANDLER
======================================================= */
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* =======================================================
   START SERVER
======================================================= */
const PORT = process.env.PORT || 4000;

startStudentPaymentReceiptJob();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});