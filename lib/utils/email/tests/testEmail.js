import { sendEmail } from "../emailSender.js";

(async () => {
  const result = await sendEmail({
    apiKey: "api-key-for-provider-if-needed",
    from: "sender mail",
    to: "recipient mail",
    subject: "Hello",
    html: "<b>Test email</b>"
  });
  console.log(result);
})();

//EMAIL_PROVIDER=<Service> node testEmail.js
// service may be "gmail", "resend", or "brevo" depending on which provider you want to test. Make sure to set necessary env vars for the provider you choose.