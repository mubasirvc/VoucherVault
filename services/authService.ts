export const STATIC_USERNAME = 'admin';
export const STATIC_PASSWORD = 'password123';

/**
 * @param username
 * @param password
 * @returns
 */
export const validateCredentials = (username: string, password: string): boolean => {
  return username === STATIC_USERNAME && password === STATIC_PASSWORD;
};
