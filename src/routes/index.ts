/**
 * @swagger
 * tags:
 *   name: Example
 *   description: Example routes
 */

import express, { Request, Response } from "express";
import CharacterRouter from "./character";

const router = express.Router();

router
  .get("/", (req: Request, res: Response) =>
    res.send("title: 'Lords of the Realm', gameState: { serfs: 100 }")
  )
  /**
   * @swagger
   * /health:
   *   get:
   *     summary: Health Check
   *     responses:
   *       200:
   *         description: Successful response
   *       500:
   *         description: Internal Server Error
   */
  .get("/health", (req: Request, res: Response) => res.send("ok"))
  .use("/character", CharacterRouter);

export default router;
