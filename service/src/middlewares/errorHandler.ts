import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../dto/ErrorResponse";

export const errorHandler: (err: ErrorResponse, req: Request, resp: Response, next: NextFunction) => void = 
    (err: ErrorResponse, req: Request, resp: Response, next: NextFunction) => {
        
        console.error(err)

        resp.status(err.statusCode || 500).json({
            success: false,
            error: err.message || 'Internal Server Error'
        })
}