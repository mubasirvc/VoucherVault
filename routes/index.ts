import express from "express";
import { getDashboard, getLogin, logout, postLogin } from "../controllers/authController.ts";
import { noCache, requireAuth } from "../middlewares/authmiddleware.ts";

const router = express.Router();

router.get("/", getLogin);
router.post("/login", postLogin);
router.get("/dashboard", requireAuth, noCache, getDashboard);
router.get("/logout", logout);

export default router;
