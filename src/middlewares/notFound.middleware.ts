import { Request, Response, NextFunction } from "express";

export const notFound = (_req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ status: 404, error: "404 endpoint not found" });
    next();
};
