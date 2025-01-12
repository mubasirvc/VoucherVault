
export const validateCredentials = (username: string, password: string): boolean => {  
  return username === process.env.LOGIN_USERNAME && password === process.env.LOGIN_PASSWORD;
};
