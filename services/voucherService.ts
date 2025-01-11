import { Voucher } from "../entities/voucher.ts";
import * as QRCode from "qrcode";
import { generateVoucherCode } from "../helpers/generateVoucherCode.ts";
import AppDataSource from "../config/data-source.ts";

// Service to create a new voucher
export const createVoucher = async (expiryDate: Date): Promise<Voucher> => {
  const voucherRepository = AppDataSource.getRepository(Voucher);

  const code = generateVoucherCode();

  const qrCode = await QRCode.toDataURL(code);

  const voucher = voucherRepository.create({
    code,
    expiryDate,
    qrCode,
    generatedAt: new Date(),
  });

  await voucherRepository.save(voucher);

  return voucher;
};

// Service to list all vouchers
export const getAllVouchers = async (): Promise<Voucher[]> => {
  const voucherRepository = AppDataSource.getRepository(Voucher);
  return await voucherRepository.find();
};
