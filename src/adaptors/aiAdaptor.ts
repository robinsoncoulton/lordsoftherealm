import { Character } from "models/character/types/Character";

export interface AiAdaptor {
  chat: () => Promise<Character>;
}
