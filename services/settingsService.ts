import { Settings } from "../entities/settings.ts"
import AppDataSource from "../config/data-source.ts";

export const updateSettingsService = async (
  data: Settings
): Promise<Settings> => {
  
  const settingsRepository = AppDataSource.getRepository(Settings);

  let settings = await settingsRepository.findOneBy({});

  if (!settings) {
    settings = new Settings();
  }

  settings.title = data.title;
  settings.textSize = data.textSize;
  settings.voucherHeight = data.voucherHeight;
  settings.voucherWidth = data.voucherWidth;
  settings.titleSize = data.titleSize;

  const savedSettings = await settingsRepository.save(settings);

  return savedSettings;
};

export const getSettings = async (): Promise<Settings[]> => {
  const settingsRepository = AppDataSource.getRepository(Settings);
  return await settingsRepository.find();
};