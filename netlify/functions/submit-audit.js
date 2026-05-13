export const handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Retrieve key securely from environment configuration
  const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

  if (!WEB3FORMS_ACCESS_KEY) {
    console.error("Missing WEB3FORMS_ACCESS_KEY environment variable.");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server configuration error. API key missing." }),
    };
  }

  try {
    const payload = JSON.parse(event.body);

    // Inject the secure backend key
    payload.access_key = WEB3FORMS_ACCESS_KEY;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload),
    });

    // Safely read raw text first — Web3Forms can return HTML on errors
    const rawText = await response.text();
    console.log("Web3Forms status:", response.status);
    console.log("Web3Forms raw response:", rawText.substring(0, 500));

    let data;
    try {
      data = JSON.parse(rawText);
    } catch (parseErr) {
      // Web3Forms returned HTML (redirect, maintenance page, etc.)
      const snippet = rawText.substring(0, 300);
      console.error("Web3Forms returned non-JSON body:", snippet);
      throw new Error("Web3Forms returned unexpected response: " + snippet);
    }

    if (!response.ok) {
      console.error("Web3Forms API error response:", data);
      throw new Error(data.message || "Web3Forms rejected the submission.");
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error("Error in submit-audit function:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Failed to submit audit data." }),
    };
  }
};
