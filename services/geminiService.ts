import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing. Chat features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = (): void => {
  const ai = getAIClient();
  if (!ai) return;

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
};

export const sendMessageToGemini = async function* (message: string) {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
     yield "I'm sorry, I cannot connect to the AI service right now. Please check your API key.";
     return;
  }

  try {
    const streamResult = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of streamResult) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I'm having trouble thinking right now. Please try again later.";
  }
};