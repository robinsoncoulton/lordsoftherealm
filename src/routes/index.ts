import express, { Request, Response } from "express";
import CharacterRouter from "./character";

const router = express.Router();

router
  .get("/", (req: Request, res: Response) =>
    res.send("title: 'Lords of the Realm', gameState: { serfs: 100 }")
  )
  .get("/health", (req: Request, res: Response) => res.send("ok"))
  .use("/character", CharacterRouter);

export default router;
