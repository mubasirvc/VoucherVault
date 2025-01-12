import { Request, Response, NextFunction } from 'express';

export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (!(req.session as any).user) {
    return res.redirect('/');
  }
  next();
};

export const loginCheck = (req: Request, res: Response, next: NextFunction): void => {
  if ((req.session as any).user) {
    res.redirect('/home')
    return
  }
  next();
};

export const noCache = (req: Request, res: Response, next: NextFunction): void => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
};
