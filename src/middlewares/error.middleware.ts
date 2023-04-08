import { Request, Response, NextFunction } from "express";
import { CustomError, handleError } from "../utils/custom_error";

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
    handleError(err, res);
}
