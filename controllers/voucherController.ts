import { getSettings } from "../services/settingsService.ts";
import {
  createVoucher,
  getAllVouchers,
  getSingleVoucher,
} from "../services/voucherService.ts";
import { Request, Response } from "express";
import { jsPDF } from "jspdf";

export const generateVoucher = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { expiryDate } = req.body;
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

export const generateVoucherPdf = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const voucher = await getSingleVoucher(req.params.id);

    if (!voucher) {
      res.status(404).send("Voucher not found");
      return;
    }

    const settings = await getSettings();

    if (!settings.length) {
      res.status(500).send("Settings not found");
      return;
    }

    const {
      title,
      titleSize,
      textSize,
      voucherWidth: qrCodeWidth,
      voucherHeight: qrCodeHeight,
    } = settings[0];

    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Title
    doc.setFontSize(titleSize);
    doc.text(title, pageWidth / 2, 20, { align: "center" });

    // Voucher Details
    doc.setFontSize(textSize);

    doc.text(
      `Generated At: ${new Date(voucher.generatedAt).toLocaleString()}`,
      pageWidth / 2,
      50,
      { align: "center" }
    );
    doc.text(
      `Expiry Date: ${new Date(voucher.expiryDate).toLocaleString()}`,
      pageWidth / 2,
      60,
      { align: "center" }
    );

    if (voucher.qrCode) {
      const qrImage = voucher.qrCode.replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ""
      );

      const qrX = (pageWidth - qrCodeWidth) / 2;
      const qrY = (pageHeight - qrCodeHeight) / 2;
      doc.addImage(qrImage, "PNG", qrX, qrY, qrCodeWidth, qrCodeHeight);
    }

    const pdfData = doc.output("arraybuffer");

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename="voucher.pdf"`
    );

    res.send(Buffer.from(pdfData));
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Failed to generate PDF");
  }
};
