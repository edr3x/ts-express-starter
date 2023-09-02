import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import config from "./config";
import { logger } from "./lib/logger";
import router from "./modules/v1/main.router";
import { CustomError } from "./utils/custom_error";

const app = express();
const port = config.app.port;

// Middlewares
app.use(cors(config.cors));
app.use(express.json());
app.get("/", (_req, res) => res.send("Hello There!"));
app.use("/api/v1", router);

// 404 handler
app.use((_req: Request, _res: Response, next: NextFunction) => {
    next(new CustomError(404, "endpoint not found"));
});

// Centralized error handler
// prettier-ignore
app.use((err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error.";

    logger.error(message);

    return res.status(statusCode).json({ success: false, message });
});

app.listen(port, () => logger.info(`listening in port:${port}`));
