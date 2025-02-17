const bcrypt = require("bcryptjs");
require("dotenv").config();

/**
 * Hache le mot de passe de l'utilisateur
 * @param {string} password - Mot de passe de l'utilisateur
 * @returns {Promise<string>} - Le mot de passe haché
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt); // Attendre le hachage
  return hashedPassword;
};
