import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'welcome to Auxwall' });
});

export default router;
