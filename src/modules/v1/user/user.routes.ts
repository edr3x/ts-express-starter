import { Router } from "express";

import { verifyInput } from "@/middlewares/verifyinput.middleware";

import { createUserSchema } from "./user.schema";
import * as UserController from "./user.controller";

const router = Router();

router.get("/", UserController.getUser);
router.post("/", verifyInput(createUserSchema), UserController.createUser);

export default router;
