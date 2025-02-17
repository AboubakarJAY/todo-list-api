import { body } from "express-validator";

export const registerUserValidator = [
  body("name")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Le nom d'utilisateur est requis")
    .isLength({ min: 3 })
    .withMessage("Le nom doit contenir au moins 3 caractere"),

  body("email")
    .isEmail()
    .withMessage("Veillez entrez un mail valide")
    .normalizeEmail(),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractere"),
];
