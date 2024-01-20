import characterController from "../controllers/character";
import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", characterController.get);
router.post("/", characterController.post);

export default router;
