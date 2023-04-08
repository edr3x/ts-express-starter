import { Router } from "express";
import * as CheckController from "../controllers/healthcheck.controller";

const router = Router();

router.get("/", CheckController.testController);
router.get("/error/:val", CheckController.testErrorController);

export default router;
