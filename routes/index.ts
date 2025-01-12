import express from "express";
import { getDashboard, getLogin, logout, postLogin } from "../controllers/authController.ts";
import { loginCheck, noCache, requireAuth } from "../middlewares/authmiddleware.ts";
import { generateVoucher, generateVoucherPdf, getHomePage, getSuccessPage, listVouchers } from "../controllers/voucherController.ts";
import { getSettingsPage, updateSettings } from "../controllers/settingsController.ts";

const router = express.Router();

router.get("/",  loginCheck, getLogin);
router.post("/login", postLogin);
router.get("/dashboard", requireAuth, noCache, getDashboard);
router.get("/logout", requireAuth, logout);
router.post("/vouchers", requireAuth, generateVoucher);
router.get("/vouchers", requireAuth, noCache, listVouchers);
router.get("/voucher/generate_pdf/:id", requireAuth, generateVoucherPdf);
router.get("/success", requireAuth, noCache, getSuccessPage);
router.get("/home", requireAuth, noCache, getHomePage);
router.get("/settings", requireAuth, noCache, getSettingsPage);
router.post("/settings",requireAuth, updateSettings);

export default router;
