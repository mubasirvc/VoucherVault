/**
 * @param username
 * @param password
 * @returns
 */
export const validateCredentials = (username: string, password: string): boolean => {
  return username === process.env.USERNAME && password === process.env.PASSWORD;
};
