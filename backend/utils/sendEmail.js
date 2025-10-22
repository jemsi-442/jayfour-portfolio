import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: `"JAYFOUR TECH CAMP" <${process.env.SMTP_USER}>`,
    to,
    subject,
    text,
  });

  console.log("Email sent: %s", info.messageId);
};

export default sendEmail;
