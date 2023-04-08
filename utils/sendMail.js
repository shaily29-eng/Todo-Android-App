import { createTransport } from "nodemailer";

export const sendMail = async (email, subject, text) => {
  const transport = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, //SMTP:simple mail transfer protocol: use mailtrap website and create acc : 22:37 
    },
  });

  await transport.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject,
    text,
  });
};
