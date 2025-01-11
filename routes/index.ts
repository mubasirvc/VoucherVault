import express from "express";
import { getDashboard, getLogin, logout, postLogin } from "../controllers/authController.ts";
import { noCache, requireAuth } from "../middlewares/authmiddleware.ts";
import { generateVoucher, getHomePage, getSettingsPage, getSuccessPage, listVouchers } from "../controllers/voucherController.ts";

const router = express.Router();

router.get("/", getLogin);
router.post("/login", postLogin);
router.get("/dashboard", requireAuth, noCache, getDashboard);
router.get("/logout", logout);
router.post("/vouchers", generateVoucher);
router.get("/vouchers", listVouchers);
router.get("/success", getSuccessPage);
router.get("/home", getHomePage);
router.get("/settings", getSettingsPage);

export default router;
