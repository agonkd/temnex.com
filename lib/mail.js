import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Verify your email",
    text: `Verify your email by clicking the link: http://localhost:3000/auth/verify-email?token=${token}`,
  };

  await transporter.sendMail(mailOptions);
};
