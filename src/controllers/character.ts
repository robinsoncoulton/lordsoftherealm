import { Request, Response } from "express";
import { Character } from "models/character/types/Character";
import openAiAdaptor from "../adaptors/openAiAdaptor/openAiAdaptor";
import { AiAdaptor } from "../adaptors/aiAdaptor";
import createCharacter from "../models/character/Character";

const aiAdaptor: AiAdaptor = openAiAdaptor;

const characterController = {
  get: async function getCharacters(
    req: Request,
    res: Response
  ): Promise<void | Character> {
    try {
      res.status(200).json(createCharacter());
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  post: async function postCharacter(
    req: Request,
    res: Response
  ): Promise<void | Character> {
    try {
      const data = await aiAdaptor.chat();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default characterController;
