import nodemailer from "nodemailer";

const transporter = (email,password)=>{
    try{
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: email,
            pass: password
        }
    });
    }catch (error) {
        console.error("Email send error:", error);
    }
};

export const sendEmail = async (from, password, to, subject, html) => {
  try {
    const emailtransporter = transporter(from,password)
    const info = await emailtransporter.sendMail({
      from: `"JetEnd" <${from}>`,
      to,
      subject,
      html,
    });
    console.log("Mail Sent!! ✅")
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: error.message };
  }
};
