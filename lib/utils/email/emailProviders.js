// Email provider adapters for JetEnd
import nodemailer from "nodemailer";

// Gmail (Nodemailer)
export const gmailProvider = async ({ from, password, to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: from, pass: password },
  });
  return transporter.sendMail({
    from: `JetEnd <${from}>`,
    to,
    subject,
    html,
  });
};

// Resend
export const resendProvider = async ({ apiKey, from, to, subject, html }) => {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

// Brevo (formerly Sendinblue)
export const brevoProvider = async ({ apiKey, from, to, subject, html }) => {
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sender: { email: from }, to: [{ email: to }], subject, htmlContent: html }),
  });
  if (!res.ok) {
    const errorBody = await res.text();
    let message = res.statusText;
    throw new Error(message);
  }
  return res.json();
};

// Add more providers as needed
