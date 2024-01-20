import axios from "axios";
import { AiAdaptor } from "../aiAdaptor";

const openAiAdaptor: AiAdaptor = {
  chat: async () => {
    const response = await axios.post(
      `${process.env.AI_BASE_URL}/v1/chat/completions`,
      {}
    );
    return { message: response.data.toString() };
  },
};

export default openAiAdaptor;
