import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/custom_error";
import { logger } from "../utils/logger";

export function notFound(_req: Request, res: Response, next: NextFunction) {
    res.status(404).json({ status: 404, error: "404 endpoint not found" });
    next();
}

export function customErrorHandler(
    err: CustomError,
    _req: Request,
    res: Response,
    _next: NextFunction,
) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";

    logger.error(message);

    return res.status(statusCode).json({ success: false, message });
}
