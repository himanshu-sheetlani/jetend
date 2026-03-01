// Email Utility Help Function

export function help() {
  console.log(`\n=== JetEnd Email Utility Help ===\n
Usage:
  - Set EMAIL_PROVIDER to one of: gmail, resend, brevo
  - Use sendEmail(options) with required fields for your provider

Supported Providers:
  - Gmail: Requires Gmail address and app password
  - Resend: Requires API key
  - Brevo: Requires API key and verified sender/domain

Options:
  - from: Sender email address
  - to: Recipient email address
  - subject: Email subject
  - html: Email HTML content
  - template: Optional function to generate HTML
  - apiKey/password: Provider credentials

Troubleshooting:
  - For Brevo/Resend, verify sender email/domain and use API key (xkeysib-)
  - For Gmail, use an app password
  - See error messages for details

Testing:
  - See tests/emailSender.test.js and tests/testEmail.js for examples

Documentation:
  - See README.md in this directory for full details

Why Resend? Why Brevo?
  - Both offer free tiers and easy integration for open-source and indie projects

===============================\n`);
}
