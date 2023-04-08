import { NextFunction, Request, Response } from "express";

import { successResponse } from "../utils/response";

import * as CheckService from "../services/healthcheck.service";

export async function testController(
    _req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const test = await CheckService.checkRoute();

        return res.status(200).json(successResponse(test));
    } catch (e: any) {
        next(e);
    }
}

export async function testErrorController(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const val = parseInt(req.params.val, 10);

        const test = await CheckService.checkErrorRoute(val);

        return res.status(200).json(successResponse(test));
    } catch (e: any) {
        next(e);
    }
}
