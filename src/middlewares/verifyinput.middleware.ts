import { AnyZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";
import { CustomError } from "@/utils/custom_error";

export const verifyInput =
    (schema: AnyZodObject) =>
    (req: Request, _res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            next();
        } catch (err: any) {
            if (err instanceof ZodError) {
                return next(new CustomError(422, err.message));
            }
            return next(err);
        }
    };
