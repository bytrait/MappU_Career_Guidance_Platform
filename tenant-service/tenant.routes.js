const express = require("express")
const router = express.Router()

const { getTenant } = require("./tenant.controller")

router.get("/", getTenant)

module.exports = router