import { Router } from "express";
import * as CheckController from "../controllers/healthcheck.controller";

const router = Router();

router.get("/", CheckController.testController);

export default router;
