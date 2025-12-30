/**
 * Zapier Lead Submission Helper
 * 
 * To use this function:
 * 1. Create a Zap in Zapier with a "Webhooks by Zapier" trigger set to "Catch Hook"
 * 2. Copy the webhook URL provided by Zapier
 * 3. Add the URL as an environment variable: REACT_APP_ZAPIER_WEBHOOK_URL
 * 4. Call this function from your form submission handler
 */

export interface LeadData {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  propertyType?: string;
  message?: string;
  source?: string;
}

/**
 * Submits lead data to Zapier webhook
 * @param data - Lead information to submit
 * @param webhookUrl - Zapier webhook URL (from environment variable)
 * @returns Promise<Response> - Response from Zapier webhook
 */
export async function submitLeadToZapier(
  data: LeadData,
  webhookUrl?: string
): Promise<Response> {
  // Get webhook URL from environment variable if not provided
  const url = webhookUrl || process.env.REACT_APP_ZAPIER_WEBHOOK_URL;

  if (!url) {
    console.warn(
      "Zapier webhook URL not configured. Set REACT_APP_ZAPIER_WEBHOOK_URL environment variable."
    );
    // Return a mock successful response for development
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const payload = {
    ...data,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Error submitting lead to Zapier:", error);
    throw error;
  }
}

/**
 * Validates lead data before submission
 * @param data - Lead data to validate
 * @returns { isValid: boolean, errors: string[] }
 */
export function validateLeadData(
  data: LeadData
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim() === "") {
    errors.push("Name is required");
  }

  if (!data.email || data.email.trim() === "") {
    errors.push("Email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Please enter a valid email address");
  }

  if (data.phone && !/^[\d\s\-\+\(\)]+$/.test(data.phone)) {
    errors.push("Please enter a valid phone number");
  }

  if (!data.interest || data.interest.trim() === "") {
    errors.push("Please select an interest");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
