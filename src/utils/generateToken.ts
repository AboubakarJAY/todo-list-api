const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Génère un token JWT pour un utilisateur
 * @param {string} id - ID de l'utilisateur
 * @param {string} email - Email de l'utilisateur
 * @returns {string} - Token JWT
 */

export const generateToken = (id: string, email: string): string => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
