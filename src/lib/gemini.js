import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

// Initialize the API using the key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

const schema = {
  type: SchemaType.OBJECT,
  properties: {
    title: {
      type: SchemaType.STRING,
      description:
        "A short, descriptive title for the response or itinerary (e.g., 'Gujarat Adventure Trip')",
    },
    headline: {
      type: SchemaType.STRING,
      description: "A catchy headline for the top of the message",
    },
    intro: {
      type: SchemaType.STRING,
      description:
        "An introductory paragraph explaining the itinerary or answering the user's query.",
    },
    days: {
      type: SchemaType.ARRAY,
      description:
        "If the user asks for a trip plan, list the days here. Omit if it's a general question.",
      items: {
        type: SchemaType.OBJECT,
        properties: {
          title: {
            type: SchemaType.STRING,
            description:
              "Title of the day (e.g., 'Day 1: Arrival in Ahmedabad')",
          },
          activities: {
            type: SchemaType.ARRAY,
            description: "List of activities for the day",
            items: {
              type: SchemaType.OBJECT,
              properties: {
                type: {
                  type: SchemaType.STRING,
                  description:
                    "Type of activity (e.g., 'Morning', 'Check-in', 'Travel')",
                },
                description: {
                  type: SchemaType.STRING,
                  description: "Details about the activity",
                },
              },
              required: ["type", "description"],
            },
          },
        },
        required: ["title", "activities"],
      },
    },
  },
  required: ["title", "headline", "intro"],
};

export async function generateTourismResponse(userMessage, chatHistory = []) {
  if (!API_KEY) {
    throw new Error("Missing VITE_GEMINI_API_KEY in environment variables.");
  }

  // Use gemini-2.5-flash as the fast, default model
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction:
      "You are a professional, helpful, and enthusiastic travel agent specializing in Gujarat Tourism. Your name is 'Gujarat Tourism Assistant'. You create amazing, well-structured itineraries and answer travel questions about Gujarat, India. Always respond using the structured JSON schema provided.",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  try {
    let startIndex = 0;
    while (
      startIndex < chatHistory.length &&
      chatHistory[startIndex].sender !== "user"
    ) {
      startIndex++;
    }

    const history = chatHistory.slice(startIndex).map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.text || msg.intro || "" }],
    }));

    const chatSession = model.startChat({
      history: history,
    });

    const result = await chatSession.sendMessage(userMessage);
    const responseText = result.response.text();

    const parsedResponse = JSON.parse(responseText);
    return parsedResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
