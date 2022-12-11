import { Router } from "express";
import * as CheckController from "../controllers/checkController";

export const checkRouter = Router();

checkRouter.get("/", CheckController.testController);
