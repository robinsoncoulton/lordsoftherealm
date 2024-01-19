import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.statusCode = 404;
  res.statusMessage = "not implemented get characters yet!";
  res.send();
});

router.post("/", (req: Request, res: Response) => {
  res.statusCode = 201;
  res.json("Lords of the Realm!");
});

export default router;
