import { Settings } from "../entities/settings";

interface ValidationErrors {
  [key: string]: string;
}

export const validateSettings = (data: Settings): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.title || typeof data.title !== "string" || data.title.trim() === "") {
    errors.title = "Title is required and must be a non-empty string.";
  }

  if (
    !data.textSize ||
    isNaN(Number(data.textSize)) ||
    Number(data.textSize) <= 0 ||
    Number(data.textSize) > 50
  ) {
    errors.textSize = "Text size must be a number between 1 and 50.";
  }

  if (
    !data.voucherHeight ||
    isNaN(Number(data.voucherHeight)) ||
    Number(data.voucherHeight) <= 0 ||
    Number(data.voucherHeight) > 500
  ) {
    errors.voucherHeight = "Voucher height must be a number between 1 and 500.";
  }

  if (
    !data.voucherWidth ||
    isNaN(Number(data.voucherWidth)) ||
    Number(data.voucherWidth) <= 0 ||
    Number(data.voucherWidth) > 500
  ) {
    errors.voucherWidth = "Voucher width must be a number between 1 and 500.";
  }

  if (
    !data.titleSize ||
    isNaN(Number(data.titleSize)) ||
    Number(data.titleSize) <= 0 ||
    Number(data.titleSize) > 50
  ) {
    errors.titleSize = "Title size must be a number between 1 and 50.";
  }

  return errors;
};
