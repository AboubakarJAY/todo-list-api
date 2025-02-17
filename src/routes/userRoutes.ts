const express = require("express");
import { loginUser, registerUser } from "../controllers/userControllers";
import { validationRequest } from "../middlewares/captureValidationErrors";
import { registerUserValidator } from "../validator/authValidator";

const router = express.Router();

router.post(
  "/register",
  registerUserValidator,
  validationRequest,
  registerUser
);

router.post("/login", loginUser);

export default router;
