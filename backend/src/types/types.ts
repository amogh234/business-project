import { Request, Response, NextFunction } from "express";

export interface NewContactRequestBody {
    userName: string,
    email: string,
    enquiry: string,
    description: string
}


export type ContactControllerType = (
    req: Request<{}, {}, NewContactRequestBody>,
    res: Response,
    next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;
