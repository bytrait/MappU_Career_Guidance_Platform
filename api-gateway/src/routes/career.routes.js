  const express = require('express');
  const { createProxyMiddleware } = require('http-proxy-middleware');

  const router = express.Router();

  console.log('Career routes loaded');
  router.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:9000',  // Career service running on port 4003
      changeOrigin: true,
      pathRewrite: {
        '^/api/careers': '/api/careers',
      },
    })
  );

  module.exports = router;
