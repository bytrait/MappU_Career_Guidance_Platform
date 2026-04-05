const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

console.log('Billing routes loaded');

/**
 * IMPORTANT:
 * We forward everything under /api/billing
 * to billing-service /api/v1/billing
 */
router.use(
    '/',
    createProxyMiddleware({
        target: process.env.BILLING_SERVICE_URL || 'http://localhost:5004',
        changeOrigin: true,

        pathRewrite: {
            '^/': '/api/v1/billing/',
        },

        /**
         * Forward user identity headers to billing service
         * (billing should NOT handle login)
         */
        onProxyReq: (proxyReq, req) => {
            if (req.user) {
                proxyReq.setHeader('x-user-id', req.user.id);
                proxyReq.setHeader('x-user-email', req.user.email);
            }

            // request tracing
            if (req.headers['x-request-id']) {
                proxyReq.setHeader('x-request-id', req.headers['x-request-id']);
            }
        },

        onError: (err, req, res) => {
            console.error('Billing proxy error:', err.message);
            res.status(502).json({
                success: false,
                message: 'Billing service unavailable',
            });
        },
    })
);

module.exports = router;
