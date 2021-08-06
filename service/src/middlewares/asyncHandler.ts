import { Request, Response, NextFunction, RequestHandler } from 'express'

export const asyncHandler: (fn: RequestHandler) => RequestHandler = (fn: RequestHandler) => (req: Request, resp: Response, next: NextFunction) => {
    return Promise
        .resolve(fn(req, resp, next))
        .catch(next)
}