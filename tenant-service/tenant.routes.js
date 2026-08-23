const express = require("express");
const router = express.Router();

const { getTenant, getTenantByPathSlug } = require("./tenant.controller");

router.get("/", getTenant);
router.get("/:slug", getTenantByPathSlug);

module.exports = router;
