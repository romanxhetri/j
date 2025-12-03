// AI features have been disabled.
export const initializeChat = (): void => {};
export const sendMessageToGemini = async function* (message: string) {
  yield "AI features are currently disabled.";
};