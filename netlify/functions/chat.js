export const handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY environment variable.");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server configuration error. API key missing." }),
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    // Prepend the system prompt for the Hoosier AI persona
    const systemPrompt = {
      role: "system",
      content: `You are an AI assistant for "Hoosier AI Automations LLC", a custom software and AI development company located in Bedford, Indiana. 
      You are built by the owner, a stay-at-home dad who believes high-end tech shouldn't be reserved for Silicon Valley. 
      Tone: Professional, confident, locally-focused (Indiana), helpful, and transparent. Do not sound generic.
      Services: Custom web development, native Android apps, AI automation (like computer vision/AI eyesight), SEO optimization.
      Pricing: Transparent and custom-coded. We map out manual bottlenecks and build custom software to eliminate them.
      Contact: nate@hoosieraiautomations.com or (812) 329-0565.
      Keep your responses relatively concise but highly informative.`
    };

    const apiMessages = [systemPrompt, ...messages];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: apiMessages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("OpenAI API Error:", data);
        throw new Error(data.error?.message || "Failed to contact OpenAI API");
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reply: data.choices[0].message.content }),
    };

  } catch (error) {
    console.error("Error in chat function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process chat request." }),
    };
  }
};
