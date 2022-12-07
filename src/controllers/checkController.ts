import { Request, Response } from 'express'

import * as CheckService from '../services/checkServices'

export const testController = async (_req: Request, res: Response) => {
    try {
        const test = await CheckService.checkRoute()
        return res.status(200).json({ test })
    } catch (e: any) {
        return res.status(500).json(e.message)
    }
}
