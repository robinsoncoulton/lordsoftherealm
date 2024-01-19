import characterController from "../controllers/character";
import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.statusCode = 404;
  res.statusMessage = "not implemented get characters yet!";
  res.send();
});

router.post("/", characterController.post);

export default router;
