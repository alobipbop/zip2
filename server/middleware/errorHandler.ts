import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
    constructor(
        public statusCode: number,
        public message: string
    ) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorHandler = (
    err: Error | AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            error: err.message,
        });
    }

    console.error('❌ Unhandled error:', err);
    return res.status(500).json({
        success: false,
        error: 'Internal Server Error',
    });
};