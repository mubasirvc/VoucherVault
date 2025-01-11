export const generateVoucherCode = (): string => {
  const randomCode = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  return randomCode;
};