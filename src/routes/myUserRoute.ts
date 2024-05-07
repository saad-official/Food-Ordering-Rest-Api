import express from "express";
import myUserController from "../Controllers/myUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/", jwtCheck, myUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  myUserController.updateCurrentUser
);
export default router;
