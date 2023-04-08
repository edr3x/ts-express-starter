import { Response } from "express";

export class CustomError extends Error {
    statusCode = 500;
    constructor(statusCode: number, message: any) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export const handleError = (err: CustomError, res: Response) => {
    const { statusCode, message } = err;
    res.status(statusCode).json({ success: false, message });
};
