import { Request, Response } from "express";
export default class HealtController {
    readonly info: (_req: Request, res: Response) => void;
    readonly ping: (_req: Request, res: Response) => void;
}
