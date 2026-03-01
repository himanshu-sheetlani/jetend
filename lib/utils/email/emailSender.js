import { gmailProvider, resendProvider, brevoProvider } from "./emailProviders.js";

// Select provider based on config/env
const getProvider = () => {
  const provider = process.env.EMAIL_PROVIDER || "gmail";
  switch (provider) {
    case "gmail":
      return gmailProvider;
    case "resend":
      return resendProvider;
    case "brevo":
      return brevoProvider;
    default:
      throw new Error("Unknown email provider: " + provider);
  }
};

export const sendEmail = async (options) => {
  try {
    const provider = getProvider();
    const info = await provider(options);
    console.log("Mail Sent!! ✅");
    return { success: true, info };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: error.message };
  }
};
