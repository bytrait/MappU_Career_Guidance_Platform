const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

console.log('Assessment routes loaded');

router.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:4002',
    changeOrigin: true,
    pathRewrite: {
      '^/api/assessment': '', // remove prefix
    },
  })
);

module.exports = router;
