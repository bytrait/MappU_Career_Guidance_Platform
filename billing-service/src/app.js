const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const requestIdMiddleware = require("./middlewares/requestId.middleware");
const morganMiddleware = require("./config/morgan.config");

const creditRoutes = require("./routes/credit.routes");
const paymentRoutes = require("./routes/payment.routes");
const internalRoutes = require("./routes/internal.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const corsConfig = require("./config/cors.config");

const app = express();

app.use(helmet());
app.use(cors(corsConfig));
app.use(cookieParser());
app.use(requestIdMiddleware);
app.use(morganMiddleware);

app.use(
  "/api/v1/billing/payments/webhook",
  express.raw({ type: "application/json" })
);


app.use(express.json());

app.use("/api/v1/billing/credits", creditRoutes);
app.use("/api/v1/billing/payments", paymentRoutes);
app.use("/api/v1/billing/internal", internalRoutes);

app.use(errorMiddleware);

module.exports = app;
