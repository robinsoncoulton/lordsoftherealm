export interface AiAdaptor {
  chat: () => Promise<{ message: string }>;
}
