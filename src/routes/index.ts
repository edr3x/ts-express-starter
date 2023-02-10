import { Router } from "express";

import healthCheck from "./healthcheck.route";

export const router = Router();

router.use("/healthcheck", healthCheck);
