const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const router = express.Router();

console.log("Auth routes loaded");

// forward requests starting with /api/v2/auth directly to auth service
router.use(
  "/api/v2/auth",
  createProxyMiddleware({
    target: "http://127.0.0.1:3000", // auth service
    changeOrigin: true,
  })
);

module.exports = router;
