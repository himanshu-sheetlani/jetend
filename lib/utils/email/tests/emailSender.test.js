import { sendEmail } from "../emailSender.js";

// Example test for Gmail (nodemailer)
async function testGmail() {
  process.env.EMAIL_PROVIDER = "gmail";
  const result = await sendEmail({
    from: "your_gmail@gmail.com",
    password: "your_app_password",
    to: "recipient@example.com",
    subject: "Test Gmail",
    html: "<b>Hello from Gmail!</b>",
  });
  console.log("Gmail result:", result);
}

// Example test for Resend
async function testResend() {
  process.env.EMAIL_PROVIDER = "resend";
  const result = await sendEmail({
    apiKey: "your_resend_api_key",
    from: "sender@yourdomain.com",
    to: "recipient@example.com",
    subject: "Test Resend",
    html: "<b>Hello from Resend!</b>",
  });
  console.log("Resend result:", result);
}

// Example test for Brevo
async function testBrevo() {
  process.env.EMAIL_PROVIDER = "brevo";
  const result = await sendEmail({
    apiKey: "your_brevo_api_key",
    from: "sender@yourdomain.com",
    to: "recipient@example.com",
    subject: "Test Brevo",
    html: "<b>Hello from Brevo!</b>",
  });
  console.log("Brevo result:", result);
}

// Run all tests
(async () => {
  await testGmail();
  await testResend();
  await testBrevo();
})();
