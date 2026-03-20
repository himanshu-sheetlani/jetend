# Email Utilities

This directory contains provider-agnostic email utilities for JetEnd. It supports multiple email providers and is designed for easy extension and configuration.

## Structure
- `emailProviders.js`: Adapters for supported email providers (Gmail via Nodemailer, Resend, Brevo HTTP API). Each provider exposes a function for sending emails.
- `emailSender.js`: Main utility that selects the provider based on configuration and delegates the email sending task.
- `tests/`: Contains test scripts for verifying email sending functionality across providers.

## Supported Providers
- **Gmail**: Uses Nodemailer. Requires Gmail address and app password.
- **Resend**: Uses Resend HTTP API. Requires API key.
- **Brevo**: Uses Brevo HTTP API. Requires API key and verified sender/domain.

## Why Resend? Why Brevo?

### Resend
- **Generous Free Tier**: Resend offers a free plan with thousands of emails per month, making it ideal for startups and open-source projects.
- **Simple API**: Easy-to-use HTTP API for transactional emails.
- **Modern Platform**: Fast, reliable, and developer-friendly.
- **No SMTP Required**: Works directly with API keys, no need for SMTP setup.

### Brevo (formerly Sendinblue)
- **Free Tier**: Brevo provides a free plan with a daily email limit, suitable for small projects and testing.
- **All-in-One**: Supports transactional and marketing emails, SMS, and more.
- **Easy Domain Verification**: Simple process for verifying sender domains and emails.
- **Global Reach**: Trusted by thousands of businesses worldwide.
- **Flexible API and SMTP**: Use either HTTP API or SMTP, depending on your needs.

Both providers are great choices for open-source and indie projects due to their free tiers, reliability, and ease of integration. Choose based on your volume, features, and workflow preferences.

## Usage
1. Set the environment variable `EMAIL_PROVIDER` to one of: `gmail`, `resend`, `brevo`.
2. Use the `sendEmail(options)` function, passing the required fields for the selected provider.
3. See `tests/emailSender.test.js` for example usage and testing.

## Running Tests

There are two test files in the `tests/` directory:
- `testEmail.js`: Simple test for sending an email with the current provider.
- `emailSender.test.js`: Runs tests for all supported providers (Gmail, Resend, Brevo).

### How to Run
1. Open your terminal and navigate to `lib/utils/email/tests`.
2. For a single provider test (e.g., Brevo):
   ```sh
   EMAIL_PROVIDER=brevo node testEmail.js
   ```
   Edit `testEmail.js` to set the correct credentials and recipient.
3. To run all provider tests:
   ```sh
   node emailSender.test.js
   ```
   Make sure to fill in valid credentials for each provider in `emailSender.test.js` before running.

Test results will be printed to the console. Check error messages for troubleshooting.

## Adding Providers
To add a new provider:
- Create a new adapter function in `emailProviders.js`.
- Update the provider selection logic in `emailSender.js`.

## Example
```js
await sendEmail({
  apiKey: "your_brevo_api_key",
  from: "noreply@yourdomain.com",
  to: "recipient@example.com",
  subject: "Hello",
  html: "<b>Test email</b>"
});
```
