import { Request } from 'express';
export declare const flashErrors: (req: any, res: any, next: any) => void;
export declare const setFlashErrors: (req: Partial<Request>, errors: string[] | string) => void;
export declare const setOld: (req: Partial<Request>, old: any) => void;
