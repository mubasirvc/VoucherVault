import { Request, Response } from "express";
import {
  getSettings,
  updateSettingsService,
} from "../services/settingsService.ts";
import { validateSettings } from "../validation/validateSettings.ts";

export const updateSettings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, textSize, voucherHeight, voucherWidth, titleSize } =
      req.body;

    const errors = validateSettings({
      title,
      textSize,
      voucherHeight,
      voucherWidth,
      titleSize,
    });
console.log(errors);

    if (Object.keys(errors).length > 0) {
      res.render("settings", {
        data: { title, textSize, voucherHeight, voucherWidth, titleSize },
        errors,
        success: ''
      });
      return;
    }

    const updatedData = {
      title,
      textSize: Number(textSize),
      voucherHeight: Number(voucherHeight),
      voucherWidth: Number(voucherWidth),
      titleSize: Number(titleSize),
    };

    const updatedSettings = await updateSettingsService(updatedData);

    res.render("settings", {
      data: updatedSettings,
      errors: {},
      success: 'Settings updated successfully!'
    });
  } catch (error: any) {
    const errorMessage = JSON.parse(error.message);

    res.status(400).json({
      message: "Validation failed",
      errors: errorMessage,
    });
  }
};

export const getSettingsPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const settings = await getSettings();
  console.log(settings[0], "settingsss");

  res.render("settings", {
    data: settings[0],
    errors: {},
    success: ''
  });
};
