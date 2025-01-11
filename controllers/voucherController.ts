import { createVoucher, getAllVouchers } from "../services/voucherService.ts";
import { Request, Response } from "express";

export const generateVoucher = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { expiryDate } = req.body;
    console.log(expiryDate);
    
    if (!expiryDate) {
      res.status(400).json({ message: "Expiry date is required" });
      return;
    }

    const voucher = await createVoucher(new Date(expiryDate));

    res.redirect("/success");
  } catch (error) {
    res.status(500).json({ message: "Error generating voucher", error });
  }
};

export const listVouchers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const vouchers = await getAllVouchers();
    res.render("vouchers", { vouchers });
  } catch (error) {
    res.status(500).json({ message: "Error fetching vouchers", error });
  }
};

export const getSuccessPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.render("success");
};

export const getHomePage = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.render("home");
};

export const getSettingsPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.render("settings");
};
