import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import { emailHtml } from "./emailHtml";

interface MailArgs {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

const EMAIL_USER = process.env.EMAIL_USER,
  EMAIL_PASSWORD = process.env.EMAIL_PASSWORD,
  EMAIL_HOST = process.env.EMAIL_HOST,
  EMAIL_PORT = process.env.EMAIL_PORT;

const sendMail = async (mailObj: MailArgs) => {
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  } as any); // somehow throws error for the host key/value pair

  const info = await transporter.sendMail(mailObj);
  return info;
};

const handleContact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, mailAdress, message } = req.body;
  // mail for informing me
  const myMailObj: MailArgs = {
    from: '"moritzbecker.de | contact form"<mail@moritzbecker.de>',
    to: "post@moritzbecker.de",
    subject: `New message from ${name}`,
    text: message,
  };

  const myInfo = await sendMail(myMailObj);

  // mail for the contactee
  const mailObj: MailArgs = {
    from: '"Moritz Becker | moritzbecker.de"<mail@moritzbecker.de>',
    to: mailAdress,
    subject: `Thank you for your message ${name}!`,
    html: emailHtml,
  };
  const info = await sendMail(mailObj);
  const resObj = { myInfo: myInfo, info: info };
  
  console.log(resObj);

  res.status(200).json(JSON.stringify(resObj));
};

export default handleContact;
