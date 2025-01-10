import express from "express";
import { getDashboard, getLogin, postLogin } from "../controllers/authController.ts";

const router = express.Router();

router.get("/", getLogin);
router.post("/login", postLogin);
router.get("/dashboard", getDashboard);

export default router;
